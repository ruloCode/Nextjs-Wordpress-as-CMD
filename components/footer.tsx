import Container from "./container";
import { usePathname, useRouter } from "next/navigation";
import LogoImage from "../public/images/Text.png";
import Image from "next/image";
import Button from "../atomic-ds/atoms/Button";

export default function Footer() {
  const pathname = usePathname();

  // Verificar si la URL contiene la palabra "contacto"
  const isContactPage = pathname === "/contacto";
  const isPromotionPage = pathname === "/concurso";
  const router = useRouter();

  console.log(pathname, isContactPage);
  return (
    <footer className="bg-accent-1 border-t border-accent-2 mt-20">
      <div>
        {!isPromotionPage && (
          <div className="slogan promotion  ">
            <h2 className="secondaryFont uppercase text-2xl font-bold mb-4">
              ¿ Quieres ganarte un millon de pesos ?
            </h2>
            <Button
              text="Participar"
              onClick={() => router.push("/concurso")}
              className="butonSecondary"
            />
          </div>
        )}

        {!isContactPage && (
          <div className="slogan ">
            <h2 className="secondaryFont uppercase text-2xl font-bold mb-4">
              Conectando personas, Construyendo Futuro
            </h2>
            <Button
              text="Unirme ahora"
              onClick={() => router.push("/contacto")}
            />
          </div>
        )}
      </div>

      <Container>
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-8 text-lg ">
          <div>
            {/* <Link href="/" className=""> */}
            <Image
              src={LogoImage}
              alt="Logo"
              // width={50}
              // height={50}
              className="h-16 w-auto"
            />
            {/* </Link> */}
          </div>
        </div>
        {isContactPage && (
          <p className="mt-3 text-1xl font-bold text-center  ">
            Conectando personas, Construyendo Futuro
          </p>
        )}

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
            href="https://www.youtube.com/@nelsonguevarafarfan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube socialIcon"></i>
          </a>
          <a
            href="https://www.tiktok.com/@nelsonguevarafarfan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok socialIcon"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}
