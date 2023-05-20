import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import useWindowWidth from 'utils/hooks/useWindowWidth';

import LogoSVG from "../../public/images/logo2.svg";
import LogoWithText from "../../public/images/logo_with_text.png";
import { useRouter } from "next/router";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import Button from "../../atomic-ds/atoms/Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const windowDimensions = useWindowWidth();

  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg py-4 px-6 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-20 z-50">
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 justify-center " : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-start gap-10 transition-all duration-500 z-50`}
      >
        {showMenu && (
          <div className="logoWithText">
            <Link href="/" className="">
              <Image
                src={LogoWithText}
                alt="Logo"
                width={150}
                height={150}
                // className=" w-auto"
              />
            </Link>
          </div>
        )}

        <Link
          href="/posts"
          className={`secondaryFont uppercase ${
            isActive("/posts") ? "border-b font-bold navItem" : "navItem"
          }`}
        >
          Territorio
        </Link>
        <Link
          href="/propuestas"
          className={`secondaryFont uppercase ${
            isActive("/propuestas") ? "border-b font-bold navItem" : "navItem"
          }`}
        >
          Propuestas
        </Link>
        <Link
          href="/contacto"
          className={`secondaryFont uppercase ${
            isActive("/contacto") ? "border-b font-bold navItem" : "navItem"
          }`}
        >
          Contacto
        </Link>


     

        {showMenu && (
          <div className="py-16 flex lg:flex-row items-center justify-center gap-8 text-lg">
            <a
              href="https://www.facebook.com/nelson.guevarafarfan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square  socialIcon "></i>
            </a>
            <a
              href="https://www.instagram.com/nelson.guevarafarfan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram socialIcon"></i>
            </a>
            <a
              href="https://twitter.com/NelsonGuevaraF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter socialIcon"></i>
            </a>
            <a
              href="https://www.tiktok.com/@nelsonguevarafarfan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-tiktok socialIcon"></i>
            </a>
          </div>
        )}
      </nav>

      {showMenu && (
        <div></div>
      )}

      <div className={`logo ${showMenu ? "z-0 " : "z-50"}`}>
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

      <div className={`${showMenu ? "hidden" : ""}`}>
        <Button
          text="Unirme ahora"
          onClick={() => {}}
          className="primaryButton hidden xl:block"
        />
      </div>


      
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>

      {/* {windowDimensions > 768 && ( */}
      
      {/* )} */}
    </header>
  );
};

export default Navbar;
