import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const { email } = await req.json();
    // console.log(email)
  
    const user =  await prisma.user.findFirst({
      where: {
        email,
      },
    });
   
    // console.log("user: ", user);
    return NextResponse.json({ user });
    
 

  } catch (error) {
    console.log(error)
    // console.error(error);
    // return NextResponse.error("An error occurred while processing the request.", { status: 500 });
  }
}
