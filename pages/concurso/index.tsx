import React, { useState } from "react";
import YouTube from "react-youtube";

import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import Button from "../../atomic-ds/atoms/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [formData, setFormData] = useState({
    name: "",
    facebook: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    youtube: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const response = await fetch("https://sheet.best/api/sheets/de96f8aa-67c7-4505-8d04-684f44cfa659", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const content = await response.json();


    console.log(content)
    // alert(content.data.tableRange);
    toast.success("¡Formulario enviado con éxito!");

    setFormData({
      name: "",
      facebook: "",
      instagram: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    })
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
              <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-solid fa-people-group mr-4"></i>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Familia / Equipo *"
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-twitter mr-4  "></i>

                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-facebook mr-4  "></i>

                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="Facebook"
                    value={formData.facebook}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-instagram mr-4  "></i>

                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="Instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-tiktok mr-4  "></i>

                  <input
                    type="text"
                    id="tiktok"
                    name="tiktok"
                    placeholder="Tiktok"
                    value={formData.tiktok}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center">
                  <i className="fa-brands fa-youtube mr-4  "></i>

                  <input
                    type="text"
                    id="youtube"
                    name="youtube"
                    placeholder="Youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
