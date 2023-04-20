import React from "react";
import Card from '../../components/Card';

import PostPreview from "../../components/post-preview";
import Header from "../../components/header";

import Layout from "../../components/layout";
import Container from "../../components/container";
import Head from "next/head";
import { getAllPostsForHome } from "../../lib/api";

import { GetStaticProps } from "next";

export default function Index() {
  const cards = [
    {
      id: 1,
      imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Card 1',
      title: 'Card 1 title',
      description: 'Card 1 description',
    },
    {
      id: 2,
      imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Card 2',
      title: 'Card 2 title',
      description: 'Card 2 description',
    },
    {
      id: 3,
      imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Card 3',
      title: 'Card 3 title',
      description: 'Card 3 description',
    },
    {
      id: 4,
      imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Card 4',
      title: 'Card 4 title',
      description: 'Card 4 description',
    },
  ];
  return (
    <Layout preview={null}>
      <Head>
        <title>Propuestas</title>
      </Head>

      <Container>
        {/* <Header /> */}

        <section>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Propuestas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}


