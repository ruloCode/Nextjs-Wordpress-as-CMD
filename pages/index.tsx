import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);

  return (
    <Layout preview={null}>
      <Head>
        <title>Yo Quiero a Suba</title>
      </Head>
      <Container>
        <div className="flex items-center justify-center w-full h-screen">
          Yo quiero a Suba se está creando ...
        </div>

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
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

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
