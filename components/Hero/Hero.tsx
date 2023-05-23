import React from "react";
import styles from './hero.module.css';
import Button from "../../atomic-ds/atoms/Button";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <div className={`${styles.hero} bg-blue-500 text-white py-10 `}>
      <div className={`${styles.hero__content} container mx-auto `}>
        <div className={`${styles.hero__description} text-center shadow-lg`}>
          <h1 className="text-4xl font-bold mb-4 secondaryFont">Yo quiero a Suba</h1>
          <p className="text-lg mb-8">Conectando personas, Construyendo Futuro.</p>
          
          <Button text="Unirme ahora" onClick={() => router.push('/contacto')} />


        </div>
      </div>
    </div>
  );
};

export default Hero;
