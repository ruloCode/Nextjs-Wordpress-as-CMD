import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";

export const Card = ({ imageSrc, alt, title, description, id, proposal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer">
      <div className="card" onClick={openModal}>
        <div className="border rounded-md overflow-hidden card-container">
          <div className="relative h-0 pb-[56.25%]">
            <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 secondaryFont">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
          content: {
            maxWidth: '600px', // Set max width for the modal content
            margin: 'auto',     // Center the modal horizontally
          }
        }}
      >
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p>{proposal}</p>
        </div>
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <i className="fa-sharp fa-regular fa-circle-xmark"></i>
        </button>
      </Modal>
    </div>
  );
};

export default Card;
