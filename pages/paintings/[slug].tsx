import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from './Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/paintings">Paintings</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

    </div>
  )
}

export default Home
