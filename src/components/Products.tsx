/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { BookCard } from "@/components/BookCard";


export function Products({ data }: { data: any }) {
    function sp(s: any) {
        const url = s
        const parts = url.split("/");
        const id = parts[parts.length - 1];
        return id
    }
    // console.log(data)
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        // More products...
    ]
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-900">Relevant</h2>

                <div className="place-items-start mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {data && data.map((product: any) => (
                        <BookCard key={product.id} product={product} sp={sp}/>
                        // <div key={product.id} className="group relative">
                        //     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        //         {(product.volumeInfo?.imageLinks) ?
                        //             <img
                        //                 src={product.volumeInfo?.imageLinks?.thumbnail}
                        //                 alt={product.volumeInfo?.imageAlt}
                        //                 className="h-full w-full object-cover object-center lg:h-full lg:w-full border border-gray-500 h-320"
                        //             /> :
                        //             <img
                        //                 src='/image/wt2.png'
                        //                 alt={product.volumeInfo?.imageAlt}
                        //                 className="h-full w-full object-cover object-center lg:h-full lg:w-full border border-gray-500 h-320 w-400"
                        //             />
                        //         }

                        //     </div>
                        //     <div className="mt-4 flex justify-between">
                        //         <div>
                        //             <h3 className="text-2xl text-red-700 ">

                        //                 <a href={`/book/${sp(product.selfLink)}`} >
                        //                     <span aria-hidden="true" className="absolute inset-0 bottom-10" />
                        //                     {product.volumeInfo.title}
                        //                     <br />

                        //                 </a>


                        //             </h3>
                        //             <br />
                        //             <p className="mt-1 text-sm text-500">BY
                        //                 :
                        //                 {product.volumeInfo.authors && product.volumeInfo.authors.map((author: string, index: number) => (
                        //                     <span key={index} className="z-90 ">
                        //                         {index > 0 && ', '}
                        //                         <a href={`/search?author=${author}`} className="text-900 hover:text-blue-500 ">{author}</a>
                        //                     </span>
                        //                 ))}
                        //             </p>
                        //             <p>
                        //                 {/* <div>
                        //                     {product.volumeInfo?.industryIdentifiers.map(({ type, identifier }, index) => (
                        //                         <span key={index}>
                        //                              {index > 0 && ', '}
                        //                             <a href={`/book/${identifier}`} className="hover:text-blue-500">{identifier}</a>
                        //                         </span>
                        //                     ))}
                        //                 </div> */}
                        //             </p>

                        //         </div>
                        //         <p className="text-sm font-medium text-900"> {product.volumeInfo.averageRating ? `${product.volumeInfo.averageRating}/5` : "unrated"}</p>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div >
        </div >
    )
}
