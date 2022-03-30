import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
// import Image from 'next/image'
import styles from './styles.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ul>
        <li>
          <a href="mailto:emma@emmastonejohnson.com">mail: emma@emmastonejohnson.com</a>
        </li>

        <li>
          <a href="https://www.instagram.com/emmastonejohnson/">insta: instagram.com/emmastonejohnson</a>
        </li>
      </ul>
    </div >
  )
}

export default Home
