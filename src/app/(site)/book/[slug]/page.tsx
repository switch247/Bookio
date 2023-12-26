"use client"
import { Fetch } from '@/lib/fetch'
import { useEffect, useState } from 'react';
import { Loading } from "@/components/Loading";
export default function Page({ params }: { params: { slug: string } }) {
    const [book, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const get = async () => {
            // setLoading(true)
            const d = await Fetch(params.slug)
            setData(d)
            setLoading(false)
            // console.log(d)
        }
        get()
    }, [])

    return (
        <>

            {loading ? (
                <Loading />
            ) : (
                <div className="min-h-[60vh] rounded-lg shadow-md p-4 overflow-hidden flex justify-top mt-8 p-9 flex-col align-middle">
                    {/* <div className="flex justify-center">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-48 h-auto" />
                    </div> */}
                    <div className="flex justify-center max-w-ful flex-wrap gap-4">
                        {book.volumeInfo.imageLinks && Object.entries(book.volumeInfo.imageLinks).map(([size, imageLink], index) => (
                            <img
                                key={index}
                                src={imageLink}
                                srcSet={`${imageLink} ${size}`}
                                alt={book?.volumeInfo.title}
                                className="w-48 h-auto "
                            />
                        ))}
                        {/* {book?.volumeInfo.imageLinks && Object.values(book?.volumeInfo.imageLinks).map((imageLink, index) => (
                            <img key={index} src={imageLink} alt={book?.volumeInfo.title} className="w-48 h-auto" />
                        ))} */}
                    </div>
                    <div className="mt-4 ">
                        <h2 className="text-xl font-bold">{book?.volumeInfo.title}</h2>
                        <p className="text-600">{book?.volumeInfo.authors.join(', ')}</p>
                        <p className="text-600">{book?.volumeInfo.publishedDate}</p>
                        <p className="text-600">Publisher:{book?.volumeInfo.publisher}</p>
                        <p className="text-600">{book?.volumeInfo.pageCount} pages</p>
                        <p className="text-600">{book?.volumeInfo.language}</p>
                        <div className="text-600" dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}></div>
                        {/* <p className="text-gray-600">{book?.volumeInfo.description}</p> */}
                        <button>
                            <a href={book?.volumeInfo.previewLink} className="text-blue-500 hover:underline">Preview</a>
                        </button>
                    </div>
                </div>
            )}


        </>


    )
}