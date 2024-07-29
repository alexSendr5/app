import Image from "next/image"
import { MouseEventHandler } from "react"


type Props = {
    title: string,
    leftIcon?: string | null,
    rightIcon?: string| null,
    handleClick?: MouseEventHandler,
    isSubmitting?: boolean,
    type?: 'button' | 'submit',
    bgcolor?: string,
    textColor?: string

}

const Button = ({title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgcolor, textColor}: Props) => {
    return(
        <button
        onClick={handleClick}
        type={type || 'button'}
        disabled = {isSubmitting}
        className={`flexCenter gap-3 px-4 py-3 ${isSubmitting ? 'bg-black/50' : bgcolor || 'bg-primary-purple'
        }  ${textColor || 'text-white'} rounded-xl text-sm font-medium max-md:w-full`}
        >
            {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left"/>}
            {title}
            {rightIcon && <Image src={rightIcon} width={14} height={14} alt="right"/>}
        </button>
    )
}

export default Button