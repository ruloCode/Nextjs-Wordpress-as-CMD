import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "./testimonials.module.css";
import Image from "next/image";
import Modal from "react-modal";
interface SlideProps {
  review: any;
  showVideo: boolean;
}
const Slide: React.FC<SlideProps> = ({ review, showVideo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const opts = {
    height: "590",
    width: "280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // Access the player object
    const player = event.target;
    // Play the video
    player.playVideo();
  };
  return (
    <div className={`${styles.testimonial} p-4 bg-gray-200`} onClick={() => {}}>
      <div className="rounded-full overflow-hidden w-24 h-24 mx-auto">
        <Image
          src={review?.image}
          alt={`Author `}
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
      <p className="text-xl">{review.text}</p>
      <p className="mt-2 font-semibold">{review.author}</p>

      {showVideo && (
        <div className="flex justify-end">
          <button onClick={openModal} className="text-blue-500 underline">
            Ver video
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            maxWidth: "300px",
            width: "100%",
            height: "640px",
            padding: "1rem",
            margin: "auto",
          },
        }}
      >
        <div>
          <h3 className="text-lg font-bold mb-2">{review.author}</h3>
          <div className="flex flex-col items-center justify-center">
              <YouTube opts={opts} videoId={review.video} onReady={onReady} />
            </div>
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

export default Slide;
