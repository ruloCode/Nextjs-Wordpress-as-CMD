import Card from "../Card";
import genero from "../../public/images/Genero.jpg";
import movilidad from "../../public/images/Movilidad.jpg";
import futuroVerde from "../../public/images/FuturoVerde.jpg";
import bienestar from "../../public/images/Bienestar.jpg";

export const CardList = () => {
  const cards = [
    {
      id: 1,
      imageSrc: genero,
      alt: "Card 1",
      title: "Genero",
      description: "Equidad y oportunidades",
      proposal: "Propuesta de Genero",
    },
    {
      id: 2,
      imageSrc: movilidad,
      alt: "Card 2",
      title: "Movilidad",
      description: "Accesibilidad y calidad",
      proposal: (
        <div>
          Como edil quiero expresar mi profunda preocupación por la necesidad de
          mejorar la movilidad en nuestra localidad. La congestión del tráfico
          es un problema importante que está causando mucho estrés y frustración
          a nuestros residentes. También está teniendo un impacto negativo en
          nuestro medio ambiente y nuestra economía. <br /> Hay una serie de
          cosas que podemos hacer para mejorar la movilidad en nuestra Suba.{" "}
          <br /> Primero, debemos asegurarnos de que nuestros semáforos estén
          sincronizados. Esto ayudará a reducir la cantidad de tiempo que los
          automóviles pasan esperando en los semáforos en rojo. <br /> En
          segundo lugar, necesitamos tapar los huecos en nuestras calles. Estas
          trampas provocan accidentes, lo que provoca atascos de tráfico. <br />{" "}
          Tercero, debemos asegurarnos de que los alimentadores de TransMilenio
          estén cumpliendo los horarios. Esto ayudará a garantizar que las
          personas puedan llegar a sus destinos a tiempo. <br /> Cuarto, debemos
          asegurarnos de que los alimentadores cubran todos los barrios de
          nuestra localidad. Esto ayudará a garantizar que todos tengan acceso
          al transporte público. <br /> En quinto lugar, debemos asegurarnos de
          que los ciclistas utilicen las ciclorrutas. Esto ayudará a reducir la
          cantidad de bicicletas en las avenidas, lo que puede ayudar a reducir
          la congestión del tráfico y los accidentes, que son en su mayoría
          mortales. Sexto, necesitamos prohibir el estacionamiento de vehículos
          en avenidas transitadas. <br /> Esto liberará espacio en las
          carreteras para que los automóviles y autobuses se muevan con mayor
          facilidad. Séptimo, debemos asegurarnos de que haya presencia de la
          policía de tránsito en los puntos clave de la localidad. Esto ayudará
          a hacer cumplir las leyes de tránsito y mantener el tráfico en
          movimiento. Octavo, necesitamos aumentar las rutas SITP para cubrir
          más barrios en nuestra Suba. Esto ayudará a que el transporte público
          sea más accesible para todos. <br /> Creo que, dando estos pasos,
          podemos hacer una mejora significativa en la movilidad de nuestra
          ciudad. Esto mejorará la calidad de vida de nuestros residentes,
          reducirá la contaminación e impulsará nuestra economía. <br />
          ¡Sigamos adelante juntos y logremos hacer una Suba más eficiente en
          movilidad! Les insto a que se unan a nuestra comunidad para apoyar
          estos esfuerzos.
        </div>
      ),
    },
    {
      id: 3,
      imageSrc: futuroVerde,
      alt: "Card 3",
      title: "Futuro Verde",
      description: "Sostenible y ecológico",
      proposal: (
        <div>
          Las administraciones públicas tienen un papel fundamental en la mejora
          de la vida de la naturaleza y los animales. Para lograrlo, propongo
          una serie de acciones claves: <br /> Reducción de la contaminación: Es
          importante que las administraciones públicas promuevan fuentes de
          energía limpia, mejoren el transporte público y cumplan con las
          normativas medioambientales para reducir la contaminación. <br />
          Conservación del agua: Ante la escasez creciente de agua, es esencial
          promover prácticas de uso eficiente y evitar el desperdicio, lo cual
          puede ser impulsado desde la administracione pública. <br />{" "}
          Protección de los bosques: Los bosques desempeñan un papel crucial al
          brindar hábitats, regular el clima y prevenir la erosión del suelo.
          Las administraciones públicas deben establecer y hacer cumplir leyes
          para protegerlos, evitando el desarrollo en áreas sensibles. Reducción
          de residuos: La gestión adecuada de los desechos contribuye a evitar
          la contaminación del aire y el agua, así como al cambio climático. Las
          administraciones públicas deben fomentar el reciclaje, el compostaje y
          ofrecer incentivos para la reducción de residuos. <br /> Protección de
          especies en peligro: Las especies amenazadas necesitan protección para
          evitar su extinción. Las administraciones públicas tienen la
          responsabilidad de establecer leyes para proteger su hábitat y
          proporcionar fondos para la conservación. Protección de humedales: Los
          humedales son ecosistemas valiosos que sustentan una diversidad de
          plantas y animales. Las administraciones públicas deben establecer y
          hacer cumplir leyes para protegerlos, incluso trabajando con
          propietarios de tierras privadas. <br /> Cuidado de las mascotas: Es
          importante asegurarnos de que las mascotas estén sanas y felices,
          brindándoles los cuidados necesarios. Las administraciones públicas
          pueden promover campañas de concientización y establecer políticas
          para garantizar su bienestar. <br /> Educación pública: Las
          administraciones públicas desempeñan un papel clave al educar al
          público sobre la importancia de la conservación. Esto se puede lograr
          mediante programas escolares, campañas de concientización y otras
          iniciativas. Cumplimiento de las leyes: Las leyes existentes para la
          protección de la naturaleza y los animales deben hacerse cumplir. Las
          administraciones públicas deben contar con los recursos necesarios y
          estar dispuestas a hacerlo. <br /> Colaboración con otras
          organizaciones: Para lograr resultados significativos, es importante
          que las administraciones públicas trabajen en conjunto con
          organizaciones ambientales, grupos de recicladores y entidades de
          bienestar animal, entre otros. Así se pueden alcanzar objetivos
          comunes. <br /> Liderazgo: Las administraciones públicas deben dar
          ejemplo al tomar medidas concretas para proteger la naturaleza y los
          animales. Esto implica adoptar políticas que apoyen la conservación e
          invirtiendo en programas que protejan el medio ambiente. Al tomar
          estas acciones, las administraciones públicas pueden marcar una
          diferencia real en la vida de humanos y animales.
        </div>
      ),
    },
    {
      id: 4,
      imageSrc: bienestar,
      alt: "Card 4",
      title: "Bienestar",
      description: "una vida mejor y saludable",
      proposal: (
        <div>
          Desde la función pública, es fundamental destacar las acciones más
          importantes a desarrollar para mejorar tanto el sector educativo como
          la atención de la salud. Estas acciones son claves para fomentar una
          ciudadanía más sana y educada, y están respaldadas por la evidencia y
          expertos en el campo. <br /> En primer lugar, es crucial invertir en
          la educación de la primera infancia, ya que sentar las bases de una
          vida de aprendizaje y éxito comienza desde los primeros años de vida.
          Esto implica el desarrollo de programas de educación infantil de alta
          calidad y accesibles para todas las familias. <br /> Asimismo, es
          necesario garantizar que todos los estudiantes tengan acceso a la
          atención médica, independientemente de su situación económica o seguro
          médico. Las administraciones públicas deben trabajar para que la
          atención sanitaria sea asequible y de calidad para todos los
          ciudadanos. <br /> La nutrición adecuada es fundamental para la salud
          y el desarrollo de los niños. Por lo tanto, las administraciones
          públicas deben proporcionar alimentos nutritivos a través de comidas
          escolares y programas extraescolares. <br /> La actividad física
          también juega un papel crucial en la salud y el desarrollo de los
          habitantes. Las administraciones públicas deben fomentar la actividad
          física a través de programas escolares, extraescolares y barriales.{" "}
          <br /> Promover la prevención y el autocuidado: Las administraciones
          públicas deben fomentar la prevención de enfermedades y el autocuidado
          de la salud mediante campañas educativas, programas de promoción y
          acciones de sensibilización. <br /> Apoyar a los maestros y las
          escuelas es esencial para brindar una educación de calidad. Las
          administraciones públicas deben proporcionar los recursos necesarios
          para que los maestros tengan éxito y las escuelas funcionen de manera
          efectiva. <br /> La rendición de cuentas también es fundamental. Las
          administraciones públicas deben dar acceso a todo niño que necesite un
          cupo escolar, y responsabilizar a las escuelas por los logros de los
          estudiantes, asegurando así una educación de calidad para todos. Hacer
          que la universidad sea asequible para todos es una acción clave. Las
          administraciones públicas deben trabajar para garantizar que el acceso
          a la educación superior no esté limitado por los ingresos familiares.{" "}
          <br /> Apoyar la educación de adultos también es esencial. Las
          administraciones públicas deben brindar asistencia financiera y
          recursos para facilitar la educación continua y el avance profesional
          de los adultos. <br /> Vigilar y hacer cumplir el compromiso de
          atención medica oportuna y de calidad de las entidades privadas que
          atienden a la población con problemas de salud. La colaboración con el
          sector privado también puede ser beneficiosa. Las administraciones
          públicas deben trabajar conjuntamente con el sector privado para
          desarrollar soluciones innovadoras en salud y educación. <br />{" "}
          Finalmente, es fundamental ser un líder. Las administraciones públicas
          deben dar ejemplo mediante la adopción de políticas y la inversión en
          programas que promuevan la salud y la educación, marcando así una
          diferencia real en la vida de todos los ciudadanos. <br /> Al
          implementar estas acciones, las administraciones públicas pueden
          generar un impacto positivo y significativo en la vida de todos los
          ciudadanos.
        </div>
      ),
    },
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
