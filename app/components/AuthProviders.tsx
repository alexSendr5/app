"use client"

import { useState, useEffect} from "react"

import { getProviders, signIn } from "next-auth/react"

type Provider = {
    id: string;
    type: string;
    name: string;
    singinURL?: string
    callbackUrl: string;
    singInUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>

const AuthProviders = () => {

    const [providers, setProviders] = useState<Providers | null>(null)

    useEffect( () => {
        const fetchProviders = async () => {
            const res = await getProviders()
            setProviders(res)
        }
        fetchProviders()
    }, [])

        if(providers){
            return(Object.values(providers).map((provider: Provider, i) => (<button key={i} onClick={() => signIn(provider?.id
            )}>{provider.id}</button>)))
        }
}

export default AuthProviders
