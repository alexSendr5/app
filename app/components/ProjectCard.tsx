import Link from "next/link"
import Image from "next/image"
type Props = {
    title: string,
    image: string,

}

const ProjcectCard = ({ title, image}: Props) => {
    return(
        <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
            <Link href='/project' className="flexCenter group relative w-full h-full ">
                <Image
                src = {image}
                width={414}
                height={314}
                className="w-full h-full object-cover rounded-2xl"
                alt="Project Image"/>

                <div className="hidden group-hover:flex profile_card-title">
                    <p className="w-full">{title}</p>
            </div>
            </Link>

        </div>
    )
}

export default ProjcectCard