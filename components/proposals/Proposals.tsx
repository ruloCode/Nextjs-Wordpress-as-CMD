import Card from "../Card";
import Image from "next/image";

import genero from "../../public/images/Genero.jpg";
import movilidad from "../../public/images/Movilidad.jpg";
import futuroVerde from "../../public/images/FuturoVerde.jpg";
import bienestar from "../../public/images/Bienestar.jpg";
import Genero1 from "../../public/images/genero/genero1.png";
import Genero2 from "../../public/images/genero/genero2.png";
import Movilidad1 from "../../public/images/movilidad/movilidad1.png";
import Movilidad2 from "../../public/images/movilidad/movilidad2.png";
import Bienestar1 from "../../public/images/bienestar/bienestar1.png";
import Bienestar2 from "../../public/images/bienestar/bienestar2.png";
import Futuro1 from "../../public/images/futuro/futuro1.png";
import Futuro2 from "../../public/images/futuro/futuro2.png";
export const CardList = () => {
  const cards = [
    {
      id: 1,
      imageSrc: genero,
      alt: "Card 1",
      title: "Genero",
      description: "Equidad y oportunidades",
      proposal: (
        <>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Potenciaremos las manzanas del cuidado en aras de afianzar
              espacios más seguros para todas:
            </h3>

            <p className="text-base mb-4">
              Impulsaremos la creación de espacios seguros y acogedores en
              nuestras comunidades, donde las mujeres y las personas de género
              diverso puedan sentirse protegidas. Esto incluirá la preservación
              de las ya existentes manzanas del cuidado donde incentivaremos a
              la comunidad a hacer uso de estas.
            </p>

            <Image
              src={Genero1}
              alt="genero1"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>

          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Defenderemos los derechos de nuestra Suba diversa y multicultural:
            </h3>

            <p className="text-base mb-4">
              Trabajaremos en estrecha colaboración con organizaciones y líderes
              comunitarios para garantizar que todas las personas,
              independientemente de su género, orientación sexual, origen étnico
              o cultural, tengan igualdad de oportunidades y acceso a los
              servicios públicos. Lucharemos contra la discriminación y
              promoveremos la diversidad y la inclusión en todas las áreas de la
              vida local.
            </p>

            <Image
              src={Genero2}
              alt="genero2"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
        </>
      ),
    },
    {
      id: 2,
      imageSrc: movilidad,
      alt: "Card 2",
      title: "Movilidad",
      description: "Accesibilidad y calidad",
      proposal: (
        <>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Aumentaremos la protección a nuestros ciclistas y peatones
              garantizando su seguridad:
            </h3>

            <p className="text-base mb-4">
              Implementaremos medidas como la creación de partidas
              presupuestarias para la creación de carriles exclusivos para
              bicicletas y la instalación de pasos peatonales seguros en toda la
              localidad. También promoveremos la educación vial para crear
              conciencia sobre la importancia de respetar a los ciclistas y
              peatones en nuestras calles.
            </p>

            <Image
              src={Movilidad1}
              alt="Movilidad1"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Taparemos + huecos de nuestra localidad para lograr mayor rapidez
              y menos trancón en nuestras vías:
            </h3>

            <p className="text-base mb-4">
              Lanzaremos un programa de mantenimiento vial intensivo que se
              centrará en la reparación de baches y la mejora de la
              infraestructura de nuestras carreteras. Esto no solo mejorará la
              seguridad de los conductores, sino que también reducirá los
              embotellamientos y el desgaste de los vehículos.
            </p>

            <Image
              src={Movilidad2}
              alt="Movilidad2"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
        </>
      ),
    },
    {
      id: 4,
      imageSrc: bienestar,
      alt: "Card 4",
      title: "Bienestar",
      description: "una vida mejor y saludable",
      proposal: (
        <>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Atenderemos el problema del déficit de cupos escolares de nuestra
              localidad:
            </h3>

            <p className="text-base mb-4">
              Trabajaremos en la expansión y mejora de la infraestructura
              educativa, incentivando la creación de nuevos cupos y ampliando
              las existentes para asegurarnos de que todos los niños tengan
              acceso a una educación de calidad.
            </p>

            <Image
              src={Bienestar1}
              alt="Bienestar1"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Recuperaremos el “CAMI” de la Gaitana para dignificar a los
              adultos mayores de nuestra localidad y mejorar el sistema local de
              salud:
            </h3>

            <p className="text-base mb-4">
              Restauraremos y modernizaremos el Centro de Atención Médica
              Integral (CAMI) en Gaitana para proporcionar atención médica de
              calidad a nuestros adultos mayores. Además, implementaremos
              programas de atención domiciliaria y promoveremos un enfoque
              centrado en la tercera edad en todo el sistema de salud local.
            </p>

            <Image
              src={Bienestar2}
              alt="Bienestar2"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
        </>
      ),
    },
    {
      id: 3,
      imageSrc: futuroVerde,
      alt: "Card 3",
      title: "Futuro Verde",
      description: "Sostenible y ecológico",
      proposal: (
        <>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
            Mejoraremos los sistemas de limpieza en Suba y concientizaremos sobre la necesidad de reciclar:
            </h3>

            <p className="text-base mb-4">
            Implementaremos campañas de educación ambiental para promover el reciclaje y la reducción de residuos en la comunidad. También aumentaremos la frecuencia de la recolección de basura y mejoraremos la gestión de los desechos para mantener un entorno limpio y saludable.
            </p>

            <Image
              src={Futuro1}
              alt="Futuro1"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
            Reconoceremos a las mascotas como seres sintientes y mejoraremos su protección en la localidad:
            </h3>

            <p className="text-base mb-4">
            Fortaleceremos las regulaciones y políticas relacionadas con el bienestar animal, promoviendo la adopción de mascotas y el control de la población animal a través de esterilizaciones. Además, fomentaremos la conciencia sobre el trato ético hacia los animales y castigaremos el abuso y la negligencia hacia ellos. 
            </p>

            <Image
              src={Futuro2}
              alt="Futuro2"
              width={300}
              height={300}
              className="mr-4"
            />
          </div>
        </>
      ),
    }
   
  ];

  return (
    <div>
      <h2 className="uppercase text-center text-2xl font-bold mb-8 mt-8 secondaryFont">
        Propuestas
      </h2>
      <div className="flex flex-wrap -mx-4">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
export default CardList;
