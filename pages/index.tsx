import Head from "next/head";
// import { GetStaticProps } from "next";
import Container from "../components/container";
import Hero from "../components/Hero/Hero";
import Proposals from "../components/proposals/Proposals";
// import Contact from "../components/contact/Contact";
// import MoreStories from "../components/more-stories";
// import HeroPost from "../components/hero-post";
// import Intro from "../components/intro";
import Layout from "../components/layout";
import Testimonials from '../components/testimonials/Testimonials'
// import { getAllPostsForHome } from "../lib/api";
// import { CMS_NAME } from "../lib/constants";

export default function Index() {



  // const problems = [
  //   {
  //     id: 1,
  //     title: "El corrupto",
  //     text: " Enemigo del progreso y la democracia. Se alimenta de sobornos, sacrifica la Salud, la Educación, los servicios, sumiendo en la pobreza.",
  //     author: "John Doe",
  //     image: "/images/el_corrupto.png",
  //   },
  //   {
  //     id: 2,
  //     title: "El Ladrón",
  //     text: "Nos arrebata lo que tanto sudor nos costó. Vivimos a diario con angustia y temor. Roba a los más pobres sin castigo",
  //     author: "John Doe",
  //     image: "/images/el_ladron.png",
  //   },
  //   {
  //     id: 3,
  //     title: "La pobreza duele",
  //     text: "Sueldos insuficientes, precios inalcanzables, empleo precario. Baja calidad de vida.",
  //     author: "John Doe",
  //     image: "/images/pobreza.png",
  //   },
  // ];
  const reviews = [
    {
      id: 1,
      text: `"Gracias al acompañamiento y guía por parte del edil Nelson Guevara hemos salvado nuestras casitas"`,
      author: "Olga Alarcón & Margarita Gil",
      image: "/images/Testimonio_1.png",
      video: '4kNsTSx7VeI'
    },
    {
      id: 2,
      text: `"La gestión y vigilancia de los recursos públicos que hace nuestro edil en Suba, se refleja en obras que mejoran la calidad de vida de la comunidad."`,
      author: "José Contreras",
      image: "/images/Testimonio_2.png",
      video: 'j8NVQku0OuE'
    },
    {
      id: 3,
      text: `"El gremio del reciclaje agradece las gestiones que el edil Nelson Guevara hace por nosotros y que nos ha permitido dignificar nuestro oficio, se ha convertido en nuestro representante"`,
      author: "Alirio",
      image: "/images/Testimonio_3.png",
      video: 'G9Hq-iBvvfA'
    },
  ];
  // const heroPost = edges[0]?.node
  // const morePosts = edges.slice(1)

  return (
    <Layout preview={null}>
      <Head>
        <title>Yo Quiero a Suba</title>
      </Head>

      <Hero />
      <Container>
        {/* <Testimonials title='Enemigos' reviews={problems} dark /> */}
        <Proposals />
        <Testimonials title='Testimonios' reviews={reviews}  />
        {/* <Contact /> */}

        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

        {/* <Intro /> */}
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )} */}

        {/* nuevo */}
      </Container>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//   const allPosts = await getAllPostsForHome(preview);

//   return {
//     props: { allPosts, preview },
//     revalidate: 10,
//   };
// };
