import React from "react";
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={`${styles.hero} bg-blue-500 text-white py-10`}>
      <div className={`${styles.hero__content} container mx-auto`}>
        <div className={`${styles.hero__description} text-center`}>
          <h1 className="text-4xl font-bold mb-4">Título del Hero</h1>
          <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis fringilla lacus, sit amet euismod quam molestie sit amet. Proin in risus eu felis tristique mattis vel nec arcu.</p>
        </div>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg">Botón de Acción</button>
      </div>
    </div>
  );
};

export default Hero;
