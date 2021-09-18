import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/navbar/navbar'
import Home from '../components/template-parts/home'


export default function Flango_LP() {
  return (
    <>
      <Head>
        <title>Flango - Fried Chicken</title>
        <meta name="description" content="Flango - Fried Chicken" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
    </>
  )
}
