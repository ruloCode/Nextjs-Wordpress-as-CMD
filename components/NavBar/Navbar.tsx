import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../../public/images/logo2.svg";
import LogoWithText from "../../public/images/logo_with_text.png";
import { useRouter } from "next/router";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white  shadow-lg py-4 px-6 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 justify-center " : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-start  gap-10 transition-all duration-500 z-50`}
      >
        {showMenu && (
          <div className="logoWithText">
            <Link href="/" className="">
              <Image
                src={LogoWithText}
                alt="Logo"
                width={120}
                height={120}
                className=" w-auto"
              />
            </Link>
          </div>
        )}

        <Link
          href="/posts"
          className={`${
            isActive("/posts") ? "border-b font-bold navItem" : "navItem"
          }`}
        >
          Territorio
        </Link>
        <Link
          href="/propuestas"
          className={`${
            isActive("/propuestas") ? "border-b font-bold navItem" : "navItem"
          }`}
        >
          Propuestas
        </Link>
        <Link
          href="/contacto"
          className={`${
            isActive("/contacto") ? "border-b font-bold navItem" : "navItem"
          }`}
        >
          Contacto
        </Link>
      </nav>
      <div></div>

      <div className={`logo   ${showMenu ? "z-0 " : "z-50"}`}>
        <Link href="/" className="">
          <Image
            src={LogoSVG}
            alt="Logo"
            width={50}
            height={50}
            className="h-16 w-auto"
          />
        </Link>
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
