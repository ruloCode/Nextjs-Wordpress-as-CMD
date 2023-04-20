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
    return router.pathname === path ? "activa" : "";
  };
  return (
    <header className="sticky top-0 z-50 bg-white  shadow-lg py-4 px-6 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative ">
          {/* <img
                src={Logo}
                class="h-14 w-auto mt-4"
              /> */}
              Logo
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <Link href="/" className="">
          Blog
        </Link>
        <Link
          href="/"
          className={`${isActive("/festicaribe") ? "activeBorderBothrefm" : ""}`}
        >
          Propuestas
        </Link>
        <Link
          href="/"
          className={`${isActive("/fundam") ? "activeBorderBottom" : ""}`}
        >
          Contacto
        </Link>
       
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Navbar;
