"use client";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema.js";
import Link from "next/link";
 import { useRouter } from "next/navigation";
import {
  Eye,
  Contact,
  Mail,
  User,
  MapPin,
  Lock,
  Map,
  Home,
  Hash,
  UserPlus, EyeOff
} from "lucide-react";


import { toast } from "sonner";

export default function Register() {

  useEffect(() => {
  reset();
}, []);
  
const router = useRouter();

   const [showPassword, setShowPassword] = useState(false);

   const [confirmPassword, setConfirmPassword] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: zodResolver(registerSchema), mode: "onChange" });

  async function submitRegister(formData) {
    // send sever url  /register end point using fetch
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

 reset();

      if (response.ok) {
        toast.success(data.message);
        router.push("/login");
       
      } else {
        toast.error(data?.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Error registering user:", err);
    }
  }

  return (
    <>
      <section className=" bg-emerald-50   flex min-h-screen flex-col items-center pt-2  p-5 w-full max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1700px]">
        {/* container */}
        <div className=" focus:ring-2   hover:-translate-y-1 duration-300 transition-all ease-in-out hover:shadow-gray-400 shadow-sm shadow-gray-400  mt-10 bg-white rounded-2xl max-w-xl  w-full  h-auto  border border-gray-300  ">
          {/* header part */}
          <div className=" flex justify-center items-center p-5  ">
            <h3 className=" font-semibold text-2xl text-gray-700">
              Create a New Account
            </h3>
          </div>

          {/* gird container start here !!1 */}
          <form autoComplete="off"
            onSubmit={handleSubmit(submitRegister)}
            className="grid grid-cols-1 md:grid-cols-2 px-5 pb-5  gap-x-5 gap-y-3 ">
            {/* User */}
            <div className="flex gap-1   relative justify-center flex-col ">
              <label htmlFor="Full_name" className="text-xs font-semibold ">
                Name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Abroova "
                {...register("full_name")}
                className="py-2 px-8 rounded-lg outline-none   bg-white border border-gray-500 "
              />
              <User
                className="absolute top-8 left-2 text-gray-500"
                size={18}></User>

              {errors.full_name && (
                <span className="text-red-500 text-xs">
                  {errors.full_name.message}
                </span>
              )}
            </div>

            {/* username */}
            <div className="flex gap-1 relative    justify-center flex-col ">
              <label htmlFor="user_name" className="text-xs font-semibold ">
                UserName
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                {...register("user_name")}
                placeholder="Abr@232 "
                className="py-2 px-10 rounded-lg outline-none   bg-white border border-gray-500 "
              />
              <UserPlus
                className="absolute text-gray-400 top-8 left-4 "
                size={18}></UserPlus>

              {errors.user_name && (
                <span className="text-red-500 text-xs">
                  {errors.user_name.message}
                </span>
              )}
            </div>

            {/* Email id  */}
            <div className=" flex gap-1   relative   justify-center flex-col ">
              <label htmlFor="email_id" className="text-xs font-semibold">
                Email Address
              </label>
              <input
                type="email" autoComplete="off"
                name="email"
                id="email"
                {...register("email")}
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="you@example.com"
              />
              <Mail
                className="absolute text-gray-500 left-3  top-8 "
                size={18}></Mail>
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone number */}
            <div className=" flex gap-1  relative justify-center flex-col ">
              <label htmlFor="phone_number" className="text-xs font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                {...register("phone")}
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="+91 8610297625 "
              />
              <Contact
                className="absolute text-gray-500 top-8  left-3"
                size={18}></Contact>
              {errors.phone && (
                <span className="text-red-500 text-xs">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* password */}
            <div className=" flex gap-1 relative  justify-center flex-col ">
              <label htmlFor="pass_id" className="text-xs font-semibold">
                Password
              </label>
              <input
                   type={showPassword ? "text" : "password"}
                name="password" autoComplete="off"
                id="password"
                {...register("password")}
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="Create a strong password"
              />

              {/* lock */}
              <Lock
                className="text-gray-400 absolute top-8 left-3 "
                size={18}></Lock>

              {/* eye icon */}
                     {showPassword ? (
        <EyeOff
          onClick={() => setShowPassword(false)}
          className="absolute  cursor-pointer top-8 text-gray-500 right-3"
          size={20}
        />
      ) : (
        <Eye
          onClick={() => setShowPassword(true)}
          className="absolute  cursor-pointer top-8 text-gray-500 right-3"
          size={20}
        />
      )}
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* confirm password */}
            <div className=" flex gap-1 relative  justify-center flex-col ">
              <label htmlFor="con_pass" className="text-xs font-semibold">
                Confirm Password
              </label>
              <input
                    type={confirmPassword ? "text" : "password"}
                name="confirmPassword"
                {...register("confirmPassword")}
                id="confirmPassword"
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="Re-enter your password"
              />
               {/* <Eye
                className="absolute  cursor-pointer top-8 text-gray-500 right-3 "
                size={20}></Eye> */}
                {confirmPassword ? (
        <EyeOff
          onClick={() => setConfirmPassword(false)}
          className="absolute  cursor-pointer top-8 text-gray-500 right-3"
          size={20}
        />
      ) : (
        <Eye
          onClick={() => setConfirmPassword(true)}
          className="absolute  cursor-pointer top-8 text-gray-500 right-3"
          size={20}
        />
      )}
              <Lock
                className="text-gray-400 absolute top-8 left-3 "
                size={18}></Lock>
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* country */}
            <div className="flex gap-1 relative justify-center flex-col">
              <label htmlFor="Country" className="text-xs font-semibold">
                Country
              </label>
              <input
                list="countryList"
                type="text"
                name="country"
                id="country"
                {...register("country")}
                className="py-2 px-10 rounded-lg outline-none bg-white border border-gray-500 focus:ring-2 focus:ring-green-400"
                placeholder="Type your country"
              />
              <datalist id="countryList">
                <option value="Afghanistan" />
                <option value="Albania" />
                <option value="Algeria" />
                <option value="Andorra" />
                <option value="Angola" />
                <option value="Antigua and Barbuda" />
                <option value="Argentina" />
                <option value="Armenia" />
                <option value="Australia" />
                <option value="Austria" />
                <option value="Azerbaijan" />

                <option value="Bahamas" />
                <option value="Bahrain" />
                <option value="Bangladesh" />
                <option value="Barbados" />
                <option value="Belarus" />
                <option value="Belgium" />
                <option value="Belize" />
                <option value="Benin" />
                <option value="Bhutan" />
                <option value="Bolivia" />
                <option value="Bosnia and Herzegovina" />
                <option value="Botswana" />
                <option value="Brazil" />
                <option value="Brunei" />
                <option value="Bulgaria" />
                <option value="Burkina Faso" />
                <option value="Burundi" />

                <option value="Cabo Verde" />
                <option value="Cambodia" />
                <option value="Cameroon" />
                <option value="Canada" />
                <option value="Central African Republic" />
                <option value="Chad" />
                <option value="Chile" />
                <option value="China" />
                <option value="Colombia" />
                <option value="Comoros" />
                <option value="Congo, Republic of the" />
                <option value="Congo, Democratic Republic of the" />
                <option value="Costa Rica" />
                <option value="Côte d'Ivoire" />
                <option value="Croatia" />
                <option value="Cuba" />
                <option value="Cyprus" />
                <option value="Czech Republic" />

                <option value="Denmark" />
                <option value="Djibouti" />
                <option value="Dominica" />
                <option value="Dominican Republic" />

                <option value="Ecuador" />
                <option value="Egypt" />
                <option value="El Salvador" />
                <option value="Equatorial Guinea" />
                <option value="Eritrea" />
                <option value="Estonia" />
                <option value="Eswatini" />
                <option value="Ethiopia" />

                <option value="Fiji" />
                <option value="Finland" />
                <option value="France" />

                <option value="Gabon" />
                <option value="Gambia" />
                <option value="Georgia" />
                <option value="Germany" />
                <option value="Ghana" />
                <option value="Greece" />
                <option value="Grenada" />
                <option value="Guatemala" />
                <option value="Guinea" />
                <option value="Guinea-Bissau" />
                <option value="Guyana" />

                <option value="Haiti" />
                <option value="Honduras" />
                <option value="Hungary" />

                <option value="Iceland" />
                <option value="India" />
                <option value="Indonesia" />
                <option value="Iran" />
                <option value="Iraq" />
                <option value="Ireland" />
                <option value="Israel" />
                <option value="Italy" />

                <option value="Jamaica" />
                <option value="Japan" />
                <option value="Jordan" />

                <option value="Kazakhstan" />
                <option value="Kenya" />
                <option value="Kiribati" />
                <option value="Kuwait" />
                <option value="Kyrgyzstan" />

                <option value="Laos" />
                <option value="Latvia" />
                <option value="Lebanon" />
                <option value="Lesotho" />
                <option value="Liberia" />
                <option value="Libya" />
                <option value="Liechtenstein" />
                <option value="Lithuania" />
                <option value="Luxembourg" />

                <option value="Madagascar" />
                <option value="Malawi" />
                <option value="Malaysia" />
                <option value="Maldives" />
                <option value="Mali" />
                <option value="Malta" />
                <option value="Marshall Islands" />
                <option value="Mauritania" />
                <option value="Mauritius" />
                <option value="Mexico" />
                <option value="Micronesia" />
                <option value="Moldova" />
                <option value="Monaco" />
                <option value="Mongolia" />
                <option value="Montenegro" />
                <option value="Morocco" />
                <option value="Mozambique" />
                <option value="Myanmar" />

                <option value="Namibia" />
                <option value="Nauru" />
                <option value="Nepal" />
                <option value="Netherlands" />
                <option value="New Zealand" />
                <option value="Nicaragua" />
                <option value="Niger" />
                <option value="Nigeria" />
                <option value="North Korea" />
                <option value="North Macedonia" />
                <option value="Norway" />

                <option value="Oman" />

                <option value="Pakistan" />
                <option value="Palau" />
                <option value="Panama" />
                <option value="Papua New Guinea" />
                <option value="Paraguay" />
                <option value="Peru" />
                <option value="Philippines" />
                <option value="Poland" />
                <option value="Portugal" />

                <option value="Qatar" />

                <option value="Romania" />
                <option value="Russia" />
                <option value="Rwanda" />

                <option value="Saint Kitts and Nevis" />
                <option value="Saint Lucia" />
                <option value="Saint Vincent and the Grenadines" />
                <option value="Samoa" />
                <option value="San Marino" />
                <option value="Sao Tome and Principe" />
                <option value="Saudi Arabia" />
                <option value="Senegal" />
                <option value="Serbia" />
                <option value="Seychelles" />
                <option value="Sierra Leone" />
                <option value="Singapore" />
                <option value="Slovakia" />
                <option value="Slovenia" />
                <option value="Solomon Islands" />
                <option value="Somalia" />
                <option value="South Africa" />
                <option value="South Korea" />
                <option value="South Sudan" />
                <option value="Spain" />
                <option value="Sri Lanka" />
                <option value="Sudan" />
                <option value="Suriname" />
                <option value="Sweden" />
                <option value="Switzerland" />
                <option value="Syria" />

                <option value="Taiwan" />
                <option value="Tajikistan" />
                <option value="Tanzania" />
                <option value="Thailand" />
                <option value="Timor-Leste" />
                <option value="Togo" />
                <option value="Tonga" />
                <option value="Trinidad and Tobago" />
                <option value="Tunisia" />
                <option value="Turkey" />
                <option value="Turkmenistan" />
                <option value="Tuvalu" />

                <option value="Uganda" />
                <option value="Ukraine" />
                <option value="United Arab Emirates" />
                <option value="United Kingdom" />
                <option value="United States of America" />
                <option value="Uruguay" />
                <option value="Uzbekistan" />

                <option value="Vanuatu" />
                <option value="Vatican City" />
                <option value="Venezuela" />
                <option value="Vietnam" />

                <option value="Yemen" />
                <option value="Zambia" />
                <option value="Zimbabwe" />
              </datalist>

              <MapPin
                className="text-gray-500  absolute top-8 left-3 "
                size={18}></MapPin>
              {errors.country && (
                <span className="text-red-500 text-xs">
                  {errors.country.message}
                </span>
              )}
            </div>

            {/* city */}
            <div className=" flex gap-1  relative  justify-center flex-col ">
              <label htmlFor="con_pass" className="text-xs font-semibold">
                City
              </label>
              <input
                type="text"
                name="city"
                {...register("city")}
                id="city"
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="Vandavasi"></input>
              <Home
                size={18}
                className="text-gray-500 absolute top-8 left-3"></Home>
              {errors.city && (
                <span className="text-red-500 text-xs">
                  {errors.city.message}
                </span>
              )}
            </div>

            {/* state  */}
            <div className=" flex gap-1 relative  justify-center flex-col ">
              <label htmlFor="state" className="text-xs font-semibold">
                State
              </label>
              <input
                type="text"
                {...register("state")}
                name="state"
                id="state"
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder=" Tamil Nadu "></input>
              <Map
                size={18}
                className="text-gray-500 absolute top-8 left-3"></Map>
              {errors.state && (
                <span className="text-red-500 text-xs">
                  {errors.state.message}
                </span>
              )}
            </div>

            {/* pincode  */}
            <div className=" flex gap-1 relative    justify-center flex-col ">
              <label htmlFor="pincode" className="text-xs font-semibold">
                Postal Code
              </label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                {...register("pincode")}
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="604408"></input>
              <Hash
                className="text-gray-400 absolute  top-8 left-3 "
                size={18}></Hash>
              {errors.pincode && (
                <span className="text-red-500 text-xs">
                  {errors.pincode.message}
                </span>
              )}
            </div>

            {/* address details */}
            <div className=" flex gap-1 relative     col-span-full  justify-center flex-col ">
              <label htmlFor="Address" className="text-xs font-semibold">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                {...register("address")}
                className="py-2 px-10 rounded-lg  outline-none    bg-white border border-gray-500 "
                placeholder="  Enter your Address"></textarea>
              <Home
                className="absolute text-gray-400 top-8   left-3 "
                size={18}></Home>
              {errors.address && (
                <span className="text-red-500 text-xs">
                  {errors.address.message}
                </span>
              )}
            </div>

            {/* plociy and terms condition */}
            <div className="col-span-full flex flex-col   gap-3 ">
              {/* legal and policy button */}

              <div className="flex   col-span-full  gap-1  ">
                <input
                  type="checkbox"
                  {...register("terms")}
                  name="terms"
                  id="terms"
                />
                <Link href="/terms">
                  <label
                    className=" flex gap-1 font-semibold hover:text-blue-800  cursor-pointer  hover:underline text-xs"
                    htmlFor="terms">
                    Accept Terms & Conditions
                  </label>
                </Link>
                {errors.terms && (
                  <span className="text-red-500 text-xs">
                    {errors.terms.message}
                  </span>
                )}
              </div>

              {/* polciy or privacy button */}

              <div className="flex   col-span-full  gap-1  ">
                <input
                  type="checkbox"
                  {...register("privacy")}
                  name="privacy"
                  id="privacy"
                />
                <Link href="/policy">
                  <label
                    className=" flex gap-1 font-semibold hover:text-blue-800  cursor-pointer  hover:underline text-xs"
                    htmlFor="privacy">
                    Privacy Policy Agreement
                  </label>
                </Link>
                {errors.privacy && (
                  <span className="text-red-500 text-xs">
                    {errors.privacy.message}
                  </span>
                )}
              </div>
            </div>

            {/* submit button */}
            <div className="col-span-full">
              <button
                className={`w-full flex justify-center gap-1 px-5 py-3 rounded-lg text-white transition-all duration-300
               ${isValid ? "bg-emerald-500 hover:bg-emerald-600" : "bg-emerald-300 cursor-not-allowed opacity-50"}`}>
                Create Account
              </button>
            </div>

            {/* Already have an account? Login */}
            <div className="col-span-full   flex items-center justify-center my-2">
              <span className=" text-center text-sm ">
                Already have an account?
                <Link href="/login" className="text-blue-500 underline px-1 ">
                  Login
                </Link>
              </span>
            </div>

            {/* end of the grid container */}
          </form>

          {/* ennd of the container */}
        </div>

        {/* end of section div */}
      </section>
    </>
  );
}
