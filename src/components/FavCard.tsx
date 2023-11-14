// "use client"
// import { useEffect } from "react";
import {Heart} from "./Heart"

export function FavCard({ product, sp }: any) {

    return (
        <div key={product.id} className="group relative">
            <div className="flex items-end justify-end hover:bg-blue-500  ">
                <Heart color="#fa3e5f" link={product.link} />
            </div>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {(product?.imageLinks) ?
                    <img
                        src={product?.imageLinks}
                        alt={product?.imageAlt}
                        className="w-200 h-200  object-cover object-center lg:h-full lg:w-full border border-gray-500 h-320"
                    /> :
                    <img
                        src='/image/wt2.png'
                        alt={product?.imageAlt}
                        className="w-200 h-200  object-cover object-center lg:h-full lg:w-full border border-gray-500 h-320 w-400"
                    />
                }

            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-2xl text-red-700 ">

                        <a href={`/book/${sp(product.link)}`} >
                            <span aria-hidden="true" className="absolute inset-0 top-5 bottom-10" />
                            {product.title}
                            <br />
                        </a>


                    </h3>
                    <br />
                    <p className="mt-1 text-sm text-500">BY
                        :
                        {product.authors && product.authors.split('/').map((author: string, index: number) => (
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
                <p className="text-sm font-medium text-900"> {product.averageRating ? `${product.averageRating}/5` : "unrated"}</p>
            </div>
        </div>
    )
}

