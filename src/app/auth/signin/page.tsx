import {LoginForm} from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Signin() {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/dashboard");

  return (
    <main>
       <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 px-8 py-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
