import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>

        <div className="py-28 flex flex-col lg:flex-row items-center justify-center gap-4 flex-col ">

          <a
            href="https://www.facebook.com/mi-pagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/mi-pagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://twitter.com/mi-pagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square text-xl"></i>
          </a>
        </div>

        
      </Container>
    </footer>
  );
}
