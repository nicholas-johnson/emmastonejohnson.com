import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ContentfulContent from "../../components/ContentfulContent";
import Header from "../../components/Header";
import { useContent } from "../../hooks/useContent";
// import Image from 'next/image'
import styles from "./styles.module.scss";

import { Document } from "@contentful/rich-text-types";

const Home: NextPage = () => {
  const content = useContent("cv");
  if (!content) return null;

  return (
    <div className={styles.container}>
      <Header />
      <ContentfulContent document={content.fields.content as Document} />
    </div>
  );
};

export default Home;
