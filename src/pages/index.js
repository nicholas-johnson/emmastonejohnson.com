import React from "react"

import {Header} from '../components/header'
import {Image} from '../components/image'
import {Hamburger} from '../components/hamburger'

import styles from "./index.module.scss"

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.hamburger}>
      <Hamburger ></Hamburger>
    </div>
    <Header></Header>
    <Image src="/images/1.jpg" alt="Acylic and ink on canvas 36 x 48"></Image>
    <Image src="/images/2.jpg" alt="Ideas for new paintings #wip"></Image>
    <Image src="/images/3.jpg" alt="Oil, acrylic, ink &amp; charcoal on canvas 32 x 40&rdquo;"></Image>


  </div>
)

7220
