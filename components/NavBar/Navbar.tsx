import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path ;
  };

  console.log(isActive(router.pathname))
  return (
    <header className="sticky top-0 z-50 bg-white  shadow-lg py-4 px-6 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
     
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 justify-center " : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-start  gap-10 transition-all duration-500 z-50`}
      >

{/* <nav
  className={`fixed bg-white w-[80%] md:w-[40%] xl:w-auto h-full ${
    showMenu ? "left-0" : "-left-full"
  } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-10 transition-all duration-500 z-50 hidden xl:flex`}
> */}

        <Link href="/posts" 

          className={`${isActive("/posts") ? "border-b font-bold" : ""}`}
        
        >
          Blog
        </Link>
        <Link
          href="/propuestas"
          className={`${isActive("/propuestas") ? "border-b font-bold" : ""}`}

        >
          Propuestas
        </Link>
        <Link
          href="/contacto"
          className={`${isActive("/contacto") ? "border-b font-bold" : ""}`}


        >
          Contacto
        </Link>
       
      </nav>
      <div></div>

      <div className={`absolute  flex items-center justify-center left-0 right-0   ${
          showMenu ? "z-0 " : "z-50"
        }`}>
  <div className={`xl:w-1/6 text-center -mt-4 `}>
    <Link href="/" className="">
      {/* <img src={Logo} class="h-14 w-auto mt-4" /> */}
      Logo
    </Link>
  </div>
</div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Navbar;
