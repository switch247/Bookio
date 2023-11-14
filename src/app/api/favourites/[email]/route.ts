import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'
import prisma from "@/lib/prismadb";
import { authMiddleware } from '@/middleware';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const email = req.url.slice(req.url.lastIndexOf('/') + 1)
    console.log(email)
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
                { status: 401 }
            );
        }
        return NextResponse.json(user.bookmarks);

    }
    catch (error) {
        console.error(error)
        return NextResponse.json(
            { message: `"An error occurred while getting bookmarks."${error}` },
            { status: 404 }
        );
    }
}

// export default authMiddleware(GET);