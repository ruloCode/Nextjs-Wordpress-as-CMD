import React from "react";
import PostPreview from "../../components/post-preview";
import Header from "../../components/header";

import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import { getAllPostsForHome } from "../../lib/api";

import { GetStaticProps } from "next";

export default function Index({ allPosts: { edges }, preview }) {
  console.log(edges);

  return (
    <Layout preview={null}>
      <Head>
        <title>Blog</title>
      </Head>

      <Container>
        {/* <Header /> */}

        <section>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {edges.map(({ node }) => (
              <PostPreview
                key={node.slug}
                title={node.title}
                coverImage={node.featuredImage}
                date={node.date}
                author={node.author}
                slug={node.slug}
                excerpt={node.excerpt}
              />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
