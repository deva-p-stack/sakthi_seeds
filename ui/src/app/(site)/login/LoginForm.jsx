"use client";

// react hook and zod for validation
import { useState,useEffect  } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Lock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {useAuth} from "../../../context/AuthContext";


export default function LoginForm() {


useEffect(() => {
  setTimeout(() => {
    reset();
  }, 100);
}, []);


 

const auth = useAuth();
const login = auth?.login;

  const [showPassword, setShowPassword] = useState(false);

  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
      reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

const onSubmit = async (data) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const loginData = await response.json();

    if (!response.ok) {
      alert(loginData?.error || "Login failed");
      return;
    }

    console.log("ROLE:", loginData.role);

     reset(); 

    // navigation
    if (loginData.role === "admin") {
      window.location.href = "/admin/dashboard";
      
    } else {
      window.location.href = "/user/dashboard";
    }

  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      {/* container */}
      
      <div  className=" w-full max-w-md  sticky top-0 z-50     flex flex-col p-5 rounded-2xl bg-white  hover:-translate-y-1 duration-300 ease-in-out shadow-xs hover:shadow-gray-500  border border-gray-300  ">
        {/* header */}
        <div className="flex justify-center items-center pb-5 ">
          <h3 className=" text-2xl font-semibold  tracking-wide ">
            Login to Your Account
          </h3>
        </div>

        {/* content */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4">
          {/* input email */}
          <div className=" relative flex flex-col space-y-1">
            <label className="text-xs font-semibold" htmlFor="email_id">
              Email Address
            </label>
            <input
              {...register("email")} autoComplete="off"
              className="border border-gray-400  rounded-lg focus:ring-2 focus:ring-gray-400  outline-none  py-2 px-10"
              type="email"
              id="email_id"
              placeholder="you@example.com"
            />
            <Mail
              className="text-gray-400 absolute left-3 top-8 "
              size={18}></Mail>
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* input password */}
          <div className=" relative flex flex-col space-y-1 ">
            <label className=" text-xs font-semibold  " htmlFor="password_user">
              Password
            </label>
            <input
              {...register("password")} autoComplete="off"
              className=" border border-gray-400  rounded-lg  focus:ring-2 focus:ring-gray-400  outline-none  py-2 px-10 "
              type={showPassword ? "text" : "password"}
              id="password_user"
              placeholder="Enter your Password"
            />

            {/* <LockKeyhole className="absolute top-7 text-gray-500  left-3 "  size={25}    ></LockKeyhole> */}
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-7 right-3 text-gray-500 cursor-pointer"
              size={25}
            />
            <Lock
              className="text-gray-400 absolute left-3 top-8 "
              size={18}></Lock>

            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Remember me   */}
          <div className=" flex justify-between items-center   ">
            <label htmlFor="remember_me" className="flex gap-1  text-xs ">
              <input className="text-sm " type="checkbox" id="remember_me" />
              Remember Me
            </label>
            <a
              href="/forgetpassword"
              className=" text-xs hover:text-blue-500 hover:underline "
              target="_blank"  rel="noopener noreferrer">
              Forgot Password
            </a>
          </div>

          {/* button */}
          <div className=" flex justify-center items-center mt-2 w-full ">
            <button 
              className={
                ` w-[80%] cursor-pointer hover:scale-[1.02] active:scale-95 hover:-translate-y-1  hover:shadow-sm hover:shadow-emerald-100  duration-300 ease-in-out transition-all px-5 py-2.5 rounded-lg  bg-emerald-500 text-white  font-semibold text-md` +
                (isValid ? "" : " opacity-50 cursor-not-allowed")
              }
               disabled={!isValid}
              type="submit">
              Login
            </button>
          </div>

          {/* sign up */}
          <div className=" flex justify-center items-center  ">
            <p className="text-xs ">
              Don't have an account{" "}
              <a
                href="/Register"
                className="inline-block text-blue-500 underline transition-transform  hover:scale-[1.02]    ">
                sign Up
              </a>
            </p>
          </div>

          {/* line  */}
          <div className=" flex gap-1 items-center justify-center ">
            {/* first line */}
            <div className=" flex-1 h-px  bg-emerald-500"></div>

            {/* midle line */}
            <span className="text-gray-500 text-sm font-medium">OR</span>

            {/* second line */}
            <div className="flex-1 h-px bg-emerald-500"> </div>
          </div>

          {/* two button google and linkdein */}
          <div className="  flex gap-3 items-center justify-center">
            {/* first button */}
            <div className=" flex  hover:scale-[1.02] duration-300 ease-in-out transition-all ">
              <button
                className="flex items-center cursor-pointer   active:scale-95 justify-center gap-1 rounded-full duration-300 ease-in-out tra  border hover:bg-white  border-gray-300 p-3  text-md text-gray-600  "
                type="button">
                <FcGoogle size={20}></FcGoogle>
              </button>
            </div>

            {/* second button  */}
            <div className="hover:scale-[1.02] duration-300 ease-in-out transition-all flex">
              <button
                className="flex items-center cursor-pointer active:scale-95 hover:scale-[1.02]  hover:text-blue-500 justify-center gap-1 border hover:bg-white hover:text-black border-gray-300 p-3 rounded-full  text-md text-gray-600 "
                type="button">
                <FaFacebookF size={20}></FaFacebookF>
              </button>
            </div>

            {/* third button */}
            <div className=" hover:scale-[1.02] duration-300 ease-in-out transition-all flex ">
              <button
                className="flex items-center cursor-pointer active:scale-95 hover:scale-[1.02] justify-center hover:text-blue-500 gap-1 border hover:bg-white hover:text-black border-gray-300 p-3 rounded-full  text-md text-gray-600 "
                type="button">
                <FaLinkedinIn size={20}></FaLinkedinIn>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
