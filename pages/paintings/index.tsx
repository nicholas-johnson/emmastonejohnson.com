import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Paintings.module.scss'
import content from '../../public/content.json'
import Header from '../../components/Header'
import ContentfulContent from '../../components/ContentfulContent'
import { usePaintings } from '../../hooks/usePaintings'
import { Document } from '@contentful/rich-text-types';

const Home: NextPage = () => {
  const paintings = usePaintings();
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

        {
        paintings
          .filter(painting => painting.fields)
          .map(painting => (
            <article key={painting.fields?.permalink} className={styles.painting}>
               <Image
                 src={`/paintings/${painting.fields?.image?.fields.file.fileName}`}
                 alt={painting.fields?.name}
                 width={painting.fields?.image?.fields.file.details.image.width}
                 height={painting.fields?.image?.fields.file.details.image.height}
                 layout="responsive"></Image>
               <h2>{painting.fields?.name}</h2>
               <ContentfulContent document={painting.fields?.description as Document} />
            </article>
          ))}

      </div>
    </>
  )
}

export default Home
