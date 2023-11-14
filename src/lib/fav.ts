import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
// import { PrismaClient } from '@prisma/client';
import prisma from "@/lib/prismadb";
// const prisma = new PrismaClient();

export async function getuser() {
    try {
        const session = await getServerSession(authOptions)
        if (session) {
            try {
                const user = await prisma.user.findFirst({
                    where: {
                        email: session.user?.email || '',
                    },
                });
                if (user)
                    return user;
                else {
                    redirect('/api/auth/signin')
                    // return null
                }

            } catch (error) {
                throw error
            }

        }
        else {
            // console.log('user is not logged in')
            redirect('/api/auth/signin')
        }
    }
    catch (e) {
        console.error(e)
    }

}



export async function toggleBookmark(email: string, bookmarkLink: string) {

    // console.log(email)
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                bookmarks: true,
            },
        });

        if (!user) {
            console.log('User not found');
            return;
        }

        const existingBookmark = user.bookmarks.find((b) => b.link === bookmarkLink);

        if (existingBookmark) {
            // Remove the bookmark
            await prisma.bookmark.delete({
                where: {
                    id: existingBookmark.id,
                },
            });
            console.log('Bookmark removed');
        } else {
            // Add the bookmark
            await prisma.bookmark.create({
                data: {
                    title: 'Bookmark Title',
                    description: 'Bookmark Description',
                    link: bookmarkLink,
                    userId: user.id,
                },
            });
            console.log('Bookmark added');
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // await prisma.$disconnect();
    }
}

// toggleBookmark('https://example.com/bookmark-link');


// function to get all favorites
export const getAllFavorites = async () => {
    const { email }: any = await getuser();

    try {
        const data = await fetch(`http://localhost:3000/api/favourites/${email}`).then(data => data.json())
        // console.log(data)
        if (data) return data
        throw new Error('could not fetch favourites')
    }
    catch (error) {
        console.error(error)
    }

};

export const isFav = async (bookmarkLink: String) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                bookmarks: true,
            },
        });

        if (!user) {
            console.log('User not found');
            return;
        }

        const existingBookmark = user.bookmarks.find((b) => b.link === bookmarkLink);
    } catch (error) {
        throw error
    }
}

export const checkFavourites = async (link: string, email: string) => {
    try {
        const data = await fetch(`http://localhost:3000/api/favourites/${email}`).then(data => data.json())
        const favourites = data.map(element => {
            return element.link
        });
        // console.log(favourites)
        // console.log( favourites?.includes(link) ? "#fa3e5f" : "white");
        return favourites?.includes(link) ? "#fa3e5f" : "white";
        
    } catch (error) {
        throw error
    }

};