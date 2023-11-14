// "use client"
import UserInfo from "@/components/UserInfo";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
// import { isLoggedInClient } from "@/lib/auth";

export default function Dashboard() {

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
        <UserInfo />
      </div>
      <Footer />
    </>



  );
}
