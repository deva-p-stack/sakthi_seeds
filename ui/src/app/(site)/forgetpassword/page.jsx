"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, Send, ArrowRight } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { toast } from "sonner";

// env variables
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ForgetPassword() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("Email");

  // captcha handler
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // send email function 
  const sendEmail = () => {
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?email=${email}`;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          message: resetLink,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Reset link sent to your email");
        setEmail("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send email");
      });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (method === "Email" && !email) {
      toast.error("Email is required");
      return;
    }

    if (!captchaValue) {
      toast.error("Captcha is required");
      return;
    }

    sendEmail();
  };

  return (
    <section className="flex flex-col max-w-[1440px] items-center bg-emerald-50 p-5 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 max-w-md w-full p-5 rounded-2xl bg-white border shadow-sm hover:-translate-y-1 duration-300"
      >
        {/* header */}
        <div className="flex justify-center pb-5">
          <h3 className="text-2xl text-gray-700 font-semibold">
            Account Password Reset
          </h3>
        </div>

        {/* method select */}
        <div className="flex flex-col gap-1 py-2">
          <p className="text-xs font-semibold pb-1">
            Select the Recovery method
          </p>

          <select
            className="border rounded-lg px-3 py-2"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone Number</option>
          </select>
        </div>

        {/* inputs */}
        <div className="grid gap-3">
          {method === "Email" && (
            <div className="flex flex-col gap-1 my-2 relative">
              <label className="text-xs font-semibold">Email Address</label>
              <input
                className="py-2 px-10 border rounded-lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              <Mail className="absolute top-9 left-3 text-gray-400" size={18} />
            </div>
          )}

          {method === "Phone" && (
            <div className="flex flex-col gap-1 relative">
              <label className="text-xs font-semibold">Phone Number</label>
              <input
                className="py-2 px-10 border rounded-lg"
                type="tel"
                placeholder="+91 9876543210"
              />
              <Phone className="absolute top-9 left-3 text-gray-400" size={18} />
            </div>
          )}

          {/* captcha */}
          <div className="flex justify-center my-2">
            <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
          </div>

          {/* button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-5 w-[60%] py-3 flex items-center justify-center gap-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white"
            >
              <Send size={20} />
              Send Link
            </button>
          </div>

          {/* footer */}
          <div className="flex text-xs mt-3 justify-between items-center">
            <p>
              Don’t have an account?{" "}
              <Link href="/Register" className="text-blue-600 underline">
                Sign Up
              </Link>
            </p>

            <Link href="/login">
              <div className="bg-emerald-500 flex items-center gap-1 text-white px-5 py-2 rounded-lg hover:scale-105">
                Back to Login <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}