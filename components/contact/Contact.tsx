import React from "react";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="name" className="block font-medium mb-1">
                Nombre completo:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="email" className="block font-medium mb-1">
                Correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block font-medium mb-1">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-1">
                Sígueme en redes sociales:
              </h3>
              <div className="flex space-x-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 00-3.54 19.54v-7.3h-2.07v-2.97h2.07V9.42c0-2.07 1.25-3.22 3.17-3.22.9 0 1.8.16 2.1.2v2.5h-1.38c-1.1 0-1.35.53-1.35 1.32v1.8h2.7l-.35 2.97h-2.35v7.3A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 00-3.54 19.54v-7.3h-2.07v-2.97h2.07V9.42c0-2.07 1.25-3.22 3.17-3.22.9 0 1.8.16 2.1.2v2.5h-1.38c-1.1 0-1.35.53-1.35 1.32v1.8h2.7l-.35 2.97h-2.35v7.3A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 00-3.54 19.54v-7.3h-2.07v-2.97h2.07V9.42c0-2.07 1.25-3.22 3.17-3.22.9 0 1.8.16 2.1.2v2.5h-1.38c-1.1 0-1.35.53-1.35 1.32v1.8h2.7l-.35 2.97h-2.35v7.3A10 10 0 0012 2z" />
                </svg>
              </a>
              </div>
              
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Has parte de nuestro concurso
          </h2>
          <a
            href="https://www.ejemplo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ir al sitio web
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
