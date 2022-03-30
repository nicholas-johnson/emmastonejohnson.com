import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Paintings.module.scss'
import content from '../../public/content.json'
import Header from '../../components/Header'
import ContentfulContent from '../../components/ContentfulContent'
import { usePaintings } from './hooks/usePaintings'

const Home: NextPage = () => {
  const paintings = usePaintings()
  return (
    <>
      <Head>
        <title>Emma Stone-Johnson</title>
        <meta name="description" content="Emma Stone-Johnson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>

        <Header />

        {paintings.map(painting => (
          <article key={painting.permalink} className={styles.painting}>
            <Image src={`/instagram/${painting.permalink}.jpeg`} alt={painting.name} width="600" height="600"></Image>
            <h2>{painting.name}</h2>
            <ContentfulContent document={painting.description} />
          </article>
        ))}

      </div>
    </>
  )
}

export default Home
