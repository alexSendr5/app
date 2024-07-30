'use client'
import { categoryFilters } from "@/constants"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
const Pre_Categories = () => {
    const router = useRouter()
    const pathname = usePathname()
    const search = useSearchParams()
    const category = search.get('category')
    const handleTags = (filter: string) => {
          router.push(`${pathname}?category=${filter}`)
    }
    return(
        <div className="flexBetween gap-5 flex-wrap w-full">
            <ul className="flex gap-2 overflow-auto">
                {categoryFilters.map
                ((filter) => (
                <button
                key={filter}
                type="button"
                onClick={() => {handleTags(filter)}}
                className={`${category === filter ? 'bg-light-white-300 font-medium' : 'font-normal'}
                 px-4 py-3 rounded-lg capitalize whitespace-nowrap`}>
                    {filter}
                </button>))}
            </ul>
        </div>
    )
}

const Categories = () => {
    return(
        <Suspense>
            <Pre_Categories />
        </Suspense>
    )
}

export default Categories