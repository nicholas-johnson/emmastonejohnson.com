import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./Paintings.module.scss";
import content from "../../public/content.json";
import Header from "../../components/Header";
import ContentfulContent from "../../components/ContentfulContent";
import { usePaintings } from "../../hooks/usePaintings";
import { Document } from "@contentful/rich-text-types";

const Home: NextPage = () => {
  const paintingList = usePaintings("paintings");
  if (!paintingList) return null;

  const paintings = paintingList.fields.painting;

  if (!paintings) return null;

  return (
    <>
      <Head>
        <title>Emma Stone-Johnson</title>
        <meta name="description" content="Emma Stone-Johnson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />

        {paintings
          .filter((painting) => painting.fields)
          .map((painting) => {
            const height =
              painting.fields?.image?.fields?.file?.details?.image?.height || 1;
            const width =
              painting.fields?.image?.fields?.file?.details?.image?.width || 1;
            return (
              <article
                key={painting.fields?.permalink}
                className={styles.painting}
              >
                <img
                  src={`${painting.fields?.image?.fields.file.url}?w=1200`}
                  alt={painting.fields?.name}
                  width="100%"
                  height={`${(width / height) * 100}%`}
                />
                <h2>{painting.fields?.name}</h2>
                <ContentfulContent
                  document={painting.fields?.description as Document}
                />
              </article>
            );
          })}
      </div>
    </>
  );
};

export default Home;
