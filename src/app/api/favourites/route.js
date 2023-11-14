import { PrismaClient, PrismaClientKnownRequestError } from '@prisma/client';
import { NextResponse } from "next/server";


import prisma from "@/lib/prismadb";
// const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { title, imageLinks, authors,  bookmarkLink, email } = await req.json();
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
            return NextResponse.json(
                { message: `User not found` },
                {status:403}
                );
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
            return NextResponse.json(
                { message: `Bookmark removed` },
                {status:200}
                );
            
        } else {
            // Add the bookmark
            await prisma.bookmark.create({
                data: {
                    title,
                    // description: 'Bookmark Description',
                    link: bookmarkLink,
                    userId: user.id,
                    imageLinks,
                    authors
                },
            });
            console.log('Bookmark added');
            return NextResponse.json(
                { message: `Bookmark added` },
                {status:200}
                );
        }
    } catch (error) {
        throw error
        console.error('Error:', error);
    } finally {
        // await prisma.$disconnect();
    }


} 
catch (error) {

        return NextResponse.json(
          { message: `"An error occurred while Updating bookmarks."${error}` },
          { status: 400 }
        );
        throw error;


    }
  }






