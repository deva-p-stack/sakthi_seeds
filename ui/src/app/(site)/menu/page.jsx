// import {Eye} from "lucide-react"

// import {toast} from "sonner"


// import { useRouter } from "next/router"; 

import MenuList from "./menu";


export default function Menu() {
  return (
    <section className="  bg-white min-h-screen   max-w-[1440px] w-full xl:max-w-[1700px] 2xl:max-w-[1990px] flex flex-col  p-5 ">

      <div>
        <h3 className="text-xl md:text-2xl py-4  font-semibold text-emerald-500 tracking-wide text-center">
          Find the Perfect Seeds for Your Preferences</h3>
      </div>

      <MenuList />
    </section>
  );
}