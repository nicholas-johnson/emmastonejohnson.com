import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ContentfulContent from '../../components/ContentfulContent'
import Header from '../../components/Header'
import { useAboutContent } from './hooks/useAboutContent'
// import Image from 'next/image'
import styles from './styles.module.scss'

const Home: NextPage = () => {
  const aboutContent = useAboutContent();
  return (
    <div className={styles.container}>
      <Header />
      <ContentfulContent document={aboutContent.fields.content} />

      {/* <p>
        Emma graduated in 2004 from Chelsea College of Art with a BA (first) in
        printed textile design. She has exhibited nationally and internationally.
      </p>
      <p>
        Emma was one of three winners for the Habitat Brighton art competition
        2019. Her painting "Dust" will be available to buy on a cusion in the
        Brighton Habitat store and online, Autumn 2020.
      </p>
      <p>
        Her paintings "Untitled Blue" and "Smashed Plate" are also featured in
        George Clarke's Old House, New Home on Channel 4, Sunday 2nd February.
      </p>
      <p>
        Emma is elated to be commencing a Painting MA at the Royal College of Art,
        2020.
      </p>
      <p>
        As a child I drew mainly cats, mostly mine; grey fur, green eyes, pink paw
        pads. My brother made a golden brick wall out of empty Benson & Hedges
        boxes. We played Star Wars together. Darth Vader tea parties. My Nanna
        collected interesting sweet wrappers and foils for me to collage with. Her
        walls were covered in souvenier spoons. Her kitchen cupboards were always
        filled with cherry aid, neon red/pink, fermenting sugar, wickedly sweet
        smelling.
      </p>
      <p>I wore pink to my brothers funeral.</p>
      <p>
        Images flash before me, flickering through me to arrive onto canvas. A
        ritual, a way to breathe, to be human. At art school, I printed a
        life-size pink Darth Vader onto the front of a silk dress. I still wear it
        sometimes.
      </p>
      <p>
        Mini splashes of paint; mini defibrillators. A fully loaded brush;
        applying paint to canvas; making marks. Watching paint sink and sit and
        slide and run is so pleasurable. I like to see what paint will do, telling
        me what the canvas needs. It is a living, breathing thing. It makes me
        feel connected to something greater. Creating transcends the banal, the
        pain, the boredom.
      </p>
      <p>
        A ritual, a dance, a way of speaking and composing my thoughts. The
        unspoken memories are too embedded to be written down. Language does not
        fit a feeling so fleeting.
      </p>
      <p>
        I question the language of colour, I attempt to paint the texture of
        memory.
      </p> */}
    </div>
  )
}

export default Home
