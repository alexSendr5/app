import Link from "next/link"
import React from "react"
import Image from "next/image"
import { NavLinks } from "@/constants"
import { link } from "fs"
import AuthProviders from "./AuthProviders"
import { GetLogUser } from "@/lib/session"
const Navbar = async () => {
    const session = await GetLogUser;
    return(
    <nav className="flexBetween navbar">
        <div className="flex-one flexStart gap-10">
            <Link href = '/'>
                <Image src='./logo.svg' width={115} height={43} alt="Flexible"/>
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>
        <div className="flexCenter gap-4">
                {session ? (
                    <>

                    <Link href='/create-project'>
                        Share Work
                    </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
        </div>
    </nav>
    )
}

export default Navbar