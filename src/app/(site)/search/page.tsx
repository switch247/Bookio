import Image from 'next/image'
// 'use-client'
"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { searchBooks } from "@/lib/fetch";
import { Result } from '../../../components/Results'
import { Loading } from '../../../components/Loading'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
export default function Home() {
    const router = usePathname();
    const query = useSearchParams()
    const [data, setData] = useState<any>(null);
    const [searched_term, setSearchedTerm] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (query) {
            const paramsObject = Object.fromEntries(query.entries());
            if (paramsObject !== null || !paramsObject) {
                // console.log(paramsObject); 
                setSearchedTerm(paramsObject);
            }
        }
    }, [query]);
    // let title = query?.getAll('subject');
    // let category = query?.getAll('category');
    // query?.forEach((e)=>{console.log(e, typeof(e))})


    useEffect(() => {
        async function search() {
            // console.log("clicked")
            if (searched_term || searched_term !== null)
                try {
                    // console.log(searched_term)
                    setLoading(true)
                    let data = await searchBooks(searched_term)
                    setData(data.items)
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);

                    // console.log(data.items)
                } catch (error) {
                    setLoading(false);
                    throw "failed to fetch"
                    
                }
        }
        search()
    }, [searched_term])


    return (<>
            <Header />
 
        <section className=' flex justify-center items-center'>
            {loading ? (
               <Loading/>
            ) : (
                <Result data={data} />
            )}
        </section>
        <Footer />
    </>
    )
}



