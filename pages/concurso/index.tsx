import React from "react";
import YouTube from "react-youtube";

import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import Button from "../../atomic-ds/atoms/Button";

export default function Index() {
  // Function to handle video player events
  const onReady = (event) => {
    // Access the player object
    const player = event.target;
    // Play the video
    player.playVideo();
  };
  const opts = {
    height: "640",
    width: "360",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <Layout preview={null}>
      <Head>
        <title className="secondaryFont">Concurso</title>
      </Head>

      <Container>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <YouTube opts={opts} videoId="FoMlSB6ftQg" onReady={onReady} />
            </div>
            <div>
              <h2 className=" uppercase text-2xl font-bold mb-4">Concurso</h2>
              <p className="text-lg  font-bold text-gray-800 bg-white shadow-md p-4 rounded-lg mb-4">
                Incribete en nuestro concurso de redes sociales y participa para
                ganar un millon de pesos.
              </p>
              <form className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-solid fa-people-group mr-4"></i>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Familia / Equipo *"
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-twitter mr-4  "></i>

                  <input
                    type="text"
                    id="tiktok"
                    name="tiktok"
                    placeholder="Tiktok"
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-facebook mr-4  "></i>

                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="Facebook"
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-instagram mr-4  "></i>

                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="Instagram"
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-tiktok mr-4  "></i>

                  <input
                    type="text"
                    id="tiktok"
                    name="tiktok"
                    placeholder="Tiktok"
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div className="submitButtonContainer col-span-2">
                  <Button
                    type="submit"
                    text="Participar"
                    onClick={() => {}}
                    className="ButtonTertiary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
