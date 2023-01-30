import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.title}>

        <h1>Store of Books</h1>

        <p>The best website for buy many online and phisycs books</p>

      </div>


      <div className={styles.sale} >

        <img className={styles.img} src="D:\Cosas Program\Github\online_books\public\index\communistbook.jpeg" alt="comunismo"/>
        <img className={styles.img2} src="public\index\communistbook2.jpeg" alt="comunismo2"/>
        <img className={styles.img3} src="public\index\communistbook3.jpeg" alt="comunismo3"/>

      </div>
    </>
  )
}
