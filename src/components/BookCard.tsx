"use client"
import {Heart} from "./Heart"

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { checkFavourites } from "@/lib/fav"
// import { isLoggedIn } from "@/lib/auth"
import { useEffect, useState } from "react";


export function BookCard({ product, sp }: any) {
    const { data: session } = useSession();
    const [heartColor, setHeartColor] = useState<string>();
    async function x() {
        try {
            // const email = isLoggedIn();
            if (!session) {
                redirect('/api/auth/signin?callbackUrl=/server')
            }
            const email = session?.user?.email || '';
            // console.log(email)
            const isFavorite = await checkFavourites(product.selfLink, email);
            setHeartColor (isFavorite);
            // console.log(isFavorite);
        } catch (error) {
            toast.error("failed")
            // error.toString()
        }
    }
   

    useEffect(() => {

        x()
    }, [product])


    return (
        <div key={product.selfLink} className="group relative">
            <div className="flex items-end justify-end hover:bg-blue-500  ">
                <Heart color={heartColor} title={product.volumeInfo.title} link={product.selfLink} imageLinks={product.volumeInfo.imageLinks?.thumbnail} authors={product.volumeInfo?.authors ? product.volumeInfo?.authors.join(';') : ""} />
            </div>
            <div className="w-200 h-200 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {(product.volumeInfo?.imageLinks) ?
                    <img
                        src={product.volumeInfo?.imageLinks?.thumbnail}
                        alt={product.volumeInfo?.imageAlt}
                        className="w-200 h-200 object-cover object-center lg:h-full lg:w-full border border-gray-500 h-320"
                    /> :
                    <img
                        src='/image/wt2.png'
                        alt={product.volumeInfo?.imageAlt}
                        className="w-200 h-200 object-cover object-center lg:h-full lg:w-full border border-gray-500 h-320 w-400"
                    />
                }

            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-2xl text-red-700 ">

                        <a href={`/book/${sp(product.selfLink)}`} >
                            <span aria-hidden="true" className="absolute inset-0 top-5 bottom-10" />
                            {product.volumeInfo.title}
                            <br />

                        </a>


                    </h3>
                    <br />
                    <p className="mt-1 text-sm text-500">BY
                        :
                        {product.volumeInfo.authors && product.volumeInfo.authors.map((author: string, index: number) => (
                            <span key={index} className="z-90 ">
                                {index > 0 && ', '}
                                <a href={`/search?author=${author}`} className="text-900 hover:text-blue-500 ">{author}</a>
                            </span>
                        ))}
                    </p>
                    <p>
                        {/* <div>
                                            {product.volumeInfo?.industryIdentifiers.map(({ type, identifier }, index) => (
                                                <span key={index}>
                                                     {index > 0 && ', '}
                                                    <a href={`/book/${identifier}`} className="hover:text-blue-500">{identifier}</a>
                                                </span>
                                            ))}
                                        </div> */}
                    </p>

                </div>
                <p className="text-sm font-medium text-900"> {product.volumeInfo.averageRating ? `${product.volumeInfo.averageRating}/5` : "unrated"}</p>
            </div>
        </div>
    )
}

