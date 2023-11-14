import NextAuth from 'next-auth';
// import EmailProvider from "next-auth/providers/email"
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from '@auth/prisma-adapter';

import { PrismaClient } from '@prisma/client';

import prisma from "@/lib/prismadb";

import type { NextAuthOptions } from "next-auth";
import {compare} from "bcryptjs";
// const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
    error: "/error",
    newUser: '/profile'
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          lable: '',
          type: 'email',
          placeholder: '',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {

        try {
          if (!credentials || !credentials.email || !credentials.password) {
            return null;
          }
          const dbUser = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (dbUser) {
            if (!dbUser || !(dbUser && dbUser.hash && await compare(credentials.password, dbUser.hash))) {
              throw new Error("incorrect credentials")
            }
    
            return dbUser;
          }
          return null
        } catch (error) {
          console.log(error)
          throw error
        }
    
      
      
      },

      // cred
    }),

    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),

    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }
    ),
    DiscordProvider({
      clientId: String(process.env.DISCORD_CLIENT_ID),
      clientSecret: String(process.env.DISCORD_CLIENT_SECRET),
    }),
    GithubProvider({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    }),

    // ...add more providers here

  ],

  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        ...token,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
    async signIn(user, account, profile) {
      console.log("user", user)
      console.log("account", account)
      return true
      // Customize the redirect URL after signing in with GitHub
      // return new URL('/profile'); // Replace '/' with your desired redirect URL
    },
  
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug:process.env.NODE_ENV === "development"
};

// export default NextAuth(authOptions);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

