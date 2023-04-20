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
 
  return (
    <Layout preview={null}>
      <Head>
        <title>contacto</title>
      </Head>

      <Container>

        <section>
         contacto
        </section>
      </Container>
    </Layout>
  );
}


