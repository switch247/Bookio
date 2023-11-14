import { PrismaClient, PrismaClientKnownRequestError } from '@prisma/client';
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// class ForbiddenException extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'ForbiddenException';
//     this.status = 403;
//   }
// }
import prisma from "@/lib/prismadb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    // const prisma = new PrismaClient();

    await prisma.user.create({data:{ name, email, hash: hashedPassword }});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } 
  catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        
        return NextResponse.json(
              { message: `credentials taken` },
              {status:403}
              );
      }
      // else{
      //   return NextResponse.json(
      //     { message: `"An error occurred while registering the user."${error}` },
      //     { status: error.status }
      //   );
      //   throw error;
      // }
    
    
    
    
    
    
    }
  }

}