import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <div className="flex items-center align-middle justify-center mx-auto">
      <RegisterForm />
    </div>
  );
}
