"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useCallback, useRef } from "react"
import Image from "next/image"

const Modal = ({children}: {children :ReactNode}) => {
    const overlay = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const onDismiss = useCallback(() => {
        router.push('/')}, [router])

    const handleClick = useCallback((e: React.MouseEvent) => {
        if((e.target == overlay.current) && onDismiss){
            onDismiss()
        }
    }, [overlay, onDismiss])
    return(
            <div ref={overlay} className="modal" onClick={handleClick}>
                <button type="button" className="absolute top-4 right-4" onClick={onDismiss}>
                    <Image src = '/close.svg' width = {17} height = {17} alt = 'Close button'/>
                </button>

                <div ref={wrapper} className="modal_wrapper">
                    {children}
                </div>
            </div>
    )
}

export default Modal