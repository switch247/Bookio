"use client"
import { use, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { toggleBookmark } from "@/lib/fav";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { checkFavourites } from "@/lib/fav"
import { isLoggedIn } from "@/lib/auth"

export const Heart = ({ color, title, link, authors, imageLinks }) => {
    const { data: session } = useSession();
    const [heartColor, setHeartColor] = useState(color);
    
    useEffect(()=>{
        // console.log(color)
        setHeartColor(color)
    },[color])
 
    const handleLike = async () => {
        if (!session) {
            redirect('/api/auth/signin?callbackUrl=/server')
        }
        const email = session?.user.email;
        setHeartColor((prev) => (prev === "#fa3e5f" ? "white" : "#fa3e5f"));
        try {
            const res = await fetch("/api/favourites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //   Authorization: `Bearer ${token}`, // Add the JWT token to the Authorization header
                },
                body: JSON.stringify({
                    email: email,
                    bookmarkLink: link,
                    imageLinks: imageLinks,
                    authors,
                    title
                }),
            });
            if (res.ok) {
                console.log(await res.json(), res.status)
                toast.success("bookmark updated")
            }
        } catch (error) {
            console.log(error)
            throw error
        }


    };


    return (
        <AiFillHeart
            size={24}
            color={heartColor}
            onClick={(e) => {
                e.stopPropagation();
                handleLike();
            }}
        />
    );
};

// export async function getServerSideProps() {
//     // Perform any server-side operations here
//     // For example, fetch data or perform calculations

//     return {
//         props: {
//             // Pass any required data as props to the component
//             link: "example-link",
//         },
//     };
// }

// export default Heart;
