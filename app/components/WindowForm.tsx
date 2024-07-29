import Link from "next/link"
import { CardData } from "../page"
import Image from "next/image"



const WindowForm = () => {
    return(
        <div className="flexStart form">
            <div>
                <p className="modal-head-text">{CardData.title}</p>
            </div>
            <div className="flexStart form-image-container">
                <Image src = {CardData.image} width = {500} height = {500} alt = 'Card image' className="w-full h-full object-cover rounded-2xl"/>
            </div>

            <div className="text-gray-100">
                <p>{CardData.descryption}</p>
            </div>
            <div className="flexStart gap-14">
                <Link href='/' >
                GitHub
                </Link>
                <Link href='/'>
                Live site
                </Link>
            </div>
        </div>
    )
}

export default WindowForm