"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect,useRouter } from "next/navigation"
export default  function UserInfo() {
  const { data: session } = useSession();
  // const router = useRouter();
  // if(!session) redirect("/auth/signin")
  function test (){
    signOut()
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={test}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
