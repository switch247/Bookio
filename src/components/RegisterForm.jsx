"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    const data = { email };
    // console.log(data)
    try {
      // const resUserExists =  await axios.post("/api/userExists", data);
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(data=>
        data.json());
      // console.log(resUserExists)
      const { user } = await resUserExists;
      console.log(user,"sdf")
        if (user) {
          setError("User already exists.");
          return;
        }
       
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (res.ok) {
          const form = e.target;
          form.reset();
          router.push("/");
        } else {
          console.log("User registration failed.");
        }
  
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex items-center place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            style={{ color: 'black' }}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            style={{ color: 'black' }}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            style={{ color: 'black' }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/auth/signin"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
