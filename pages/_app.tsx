import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
      position="bottom-center" // Posición del toast en la parte inferior y centrado
      autoClose={3000} // Duración de 3 segundos
      />
    </>
  );
}

export default MyApp;
