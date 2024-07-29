"use client"

import { useRouter } from "next/navigation"
import React, { ReactNode, useCallback, useRef } from "react"
import Image from "next/image"

const Window = ({children}: {children: ReactNode}) => {
    const router = useRouter()
    const wrap = useRef<HTMLDivElement>(null)
    const showDown = useRef<HTMLDivElement>(null)
    const OnDisplay = useCallback(() => {
         router.push('/')
    }, [router])

    const ClickMe = useCallback((event: React.MouseEvent) => {
        if((wrap.current == event.target) && OnDisplay){
            OnDisplay()
        }
    }, [wrap, OnDisplay])
    return(
        <div ref={wrap} className="modal" onClick={ClickMe}>
            <button className="absolute top-4 right-4" onClick={OnDisplay}>
                <Image
                src = '/close.svg'
                width={17}
                height={17}
                alt="close button"
                />
            </button>
            <div ref={showDown} className="modal_wrapper">{children}</div>
        </div>
    )
}

export default Window