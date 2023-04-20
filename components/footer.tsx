import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>

        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-8 flex-col text-lg ">
        <p className="secondaryFont">Nelson Guevara Farfan</p>

        </div>

        <div className="py-16 flex flex-col lg:flex-row items-center justify-center gap-8 flex-col text-lg ">
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
