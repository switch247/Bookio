"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast"
export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const signWithGoogle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ email: "", password: "" });
    // const res = await 

    try {
      signIn("google", {
        redirect: false,
        callbackUrl,
      })
    } catch (error) {
      throw error
    }
    setLoading(false);

  }

  const signWithGithub = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ email: "", password: "" });
    // const res = await 
  
    try {

      signIn("github", {
        redirect: false,
        callbackUrl,
      })
    } catch (error) {
      throw error
    }
    setLoading(false);

  }


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);


      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      })

      // .then((callback)=>
      // {
      //   if(callback.error){
      //     toast.error(callback.error)
      //   }
      //   if(callback?.ok && callback?.error){toast.success("logged in")}

      // }
      // )
      // .catch(()=>{
      //   toast.error("something went wrong")
      // });

      setFormValues({ email: "", password: "" });
      setLoading(false);

      console.log(res);
      if (!res?.error) {
        console.log(res)
        toast.success("logged in")
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
        toast.error(res.error)

      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style = "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 m-3">


      <form onSubmit={onSubmit}>
        {error && (
          <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
        )}
        <div className="mb-6">
          <input
            required
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email address"
            className={`${input_style}`}
          />
        </div>
        <div className="mb-6">
          <input
            required
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            className={`${input_style}`}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
          className="inline-block px-7 py-4 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          disabled={loading}
        >
          {loading ? "loading..." : "Sign In"}
        </button>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>

        <a
          // disabled={loading}
          className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
          style={{ backgroundColor: "#3b5998" }}
          onClick={(e) => {signWithGoogle(e)}}
          role="button"
        >
          <img
            className="pr-2"
            src="/images/google.svg"
            alt=""
            style={{ height: "2rem" }}
          />
          {loading ? "loading..." : "Continue with Google"}

        </a>
        <a
          // disabled={loading}
          className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
          style={loading ?
            { backgroundColor: "red" }
            :
            { backgroundColor: "#55acee" }
          }
          onClick={(e) => { signWithGithub(e) }}
          role="button"
        >
          <img
            className="pr-2"
            src="/images/github.svg"
            alt=""
            style={{ height: "2.2rem" }}
          />
          {loading ? "loading..." : "Continue with GitHub"}

        </a>
      </form>

    </div>
  )

};
