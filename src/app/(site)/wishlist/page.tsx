
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { getAllFavorites } from '@/lib/fav';
import { FavCard } from "@/components/FavCard"

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default async function Wish() {

  const data = await getAllFavorites().catch(e => { throw e })
  // console.log(data)
  function sp(s: any) {
    const url = s
    const parts = url && url.includes('/') && url.split("/");
    const id = parts[parts.length - 1];
    return id
  }
  return (
    <>
      <Header />
      <main className="flex justify-center items-centre min-h-[50vh]">
        <div className="place-items-start mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


          {data && data.length > 0 ? (
            data.map((product: any) => (
              <FavCard key={product.id} product={product} sp={sp} />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </main>

      <Footer />

    </>

  )
}
