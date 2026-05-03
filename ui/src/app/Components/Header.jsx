 "use client";
 
 import Link from "next/link";
 import { usePathname } from "next/navigation";
 
 import {ShoppingCart} from "lucide-react"

 import { useAuth } from "@/context/AuthContext";

 import { useRouter } from "next/navigation";
 
 export default function Header(){

  const router = useRouter();

      const { user, isAuthenticated, logout } = useAuth();

  const pathName = usePathname();

  const goToProfile = () => {
  router.push("/user/profile");
};

    return(
<>
<header className="flex justify-between bg-white sticky top-0 z-50 items-center px-10 py-3 shadow-md">
{/* left  */}
<div className="flex items-center justify-center  gap-5 ">


{/* title */}

  <Link href="/">
<div className="px-3">
    <h3 className=" font-bold  tracking-wide text-emerald-500 text-xl ">Sakthi Agri Seeds</h3>
</div>
</Link>





{/* left div end below */}
</div>


{/* center  */}
{/* nav link */}
<div>
<ul className="flex gap-5 ">


  {/* dashboard */}
  
         {isAuthenticated ? (
  <>
    <li className="relative">
      <Link
        href="/user/dashboard"
        className={`relative font-semibold tracking-wide transition duration-300 ${
          pathName === "/user/dashboard"
            ? "text-emerald-600"
            : "text-gray-600 hover:text-emerald-600"
        }`}
      >
        Dashboard
      </Link>
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${
          pathName === "/user" ? "w-full" : "w-0"
        }`}
      />
    </li>
  </>
) : null}



    {/* home */}
      {!isAuthenticated ? (<>
      
       <li className="relative ">
    <Link href="/"   className={`relative transition font-semibold tracking-wide duration-300 ${pathName === "/" ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600" }`}>Home </Link>
    <span className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${pathName === "/" ? "w-full" : "w-0"}`} />
    </li>

      </>):null}

       {!isAuthenticated ? (<>
        <li className="relative ">
             <Link href="/About"   className={`relative font-semibold tracking-wide transition duration-300 ${pathName === "/About" ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600" }`}>About</Link>
             <span className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${pathName === "/About" ? "w-full" : "w-0"}`} />   
            </li>

    
      </>):null}


    

    {/* Browse seed */}
    <li className="relative">
  <Link
    href={isAuthenticated ? "/users/menu" : "/menu"}
    className={`relative font-semibold tracking-wide transition duration-300 ${
      pathName === "/menu"
        ? "text-emerald-600"
        : "text-gray-600 hover:text-emerald-600"
    }`}
  >
    Browse Seeds
  </Link>

  <span
    className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${
      pathName === "/menu" ? "w-full" : "w-0"
    }`}
  />
</li>


    {/* {!isAuthenticated? (<>
    
        <li className="relative ">
             <Link href="/users/menu"   className={`relative  font-semibold tracking-wide transition duration-300 ${pathName === "/menu" ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600" }`}>Browse Seeds </Link>
             <span className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${pathName === "/menu" ? "w-full" : "w-0"}`} />
        </li>

    </>):null}

        <li className="relative ">
             <Link href="/menu"   className={`relative  font-semibold tracking-wide transition duration-300 ${pathName === "/menu" ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600" }`}>Browse Seeds </Link>
             <span className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${pathName === "/menu" ? "w-full" : "w-0"}`} />
        </li> */}

    {/* About  */}
          


</ul>


</div>


{/* right */}
<div className="flex gap-4 ">


{/* search */}
{/* <div className="relative flex items-center justify-center ">
<input className="outline-none bg-gray-50  rounded-2xl px-8 py-2  text-xs " type="search" name="plant" id="plant" placeholder="Search Seeds" />
<Search size={16} className=" absolute  text-gray-400 top-2.5 left-2"></Search>
</div> */}




{!isAuthenticated ? (
  <>
    <Link
      href={"/login"}
      className="px-5 py-2 text-gray-500 text-sm font-semibold tracking-wide bg-white/30 rounded-2xl backdrop-blur-sm shadow-sm hover:bg-white/50 hover:text-gray-600 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out"
    >
      Login
    </Link>

    <Link
      href={"/Register"}
      className="px-5 py-2 bg-emerald-500 text-sm hover:-translate-y-1 font-semibold tracking-wide cursor-pointer hover:scale-[1.01] hover:shadow-xs transition-all duration-300 ease-out rounded-2xl text-white"
    >
      Register
    </Link>
  </>
) : (




            <div className="flex items-center space-x-6">

               
              
             

              {/* <span className="text-white">Welcome, {user.name}</span> */}

               
               <Link href="/user/order">
                  <div className="cursor-pointer hover:scale-105 transition">
                    <ShoppingCart size={18} />
                  </div>
                </Link>

              <img 
              onClick={goToProfile}
                className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 duration-300 ease-in-out  transition-all"
               src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}`}
                alt="Rounded avatar"
              />
              <button
                onClick={() => logout()}
                className="px-2 py-2 bg-black text-black rounded"
                title="Logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                >
                  <path
                    fill="currentColor"
                    d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
                  />
                </svg>
              </button>
            </div>
          )}


            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>

 {/* <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0"
                    >
                      Products
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent md:text-fg-brand md:p-0"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div> */}


</div>



</header>








</>



    );




 }