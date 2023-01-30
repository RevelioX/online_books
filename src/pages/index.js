import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/index.module.css'



import comunismo from "../../public/index/communistbook.jpeg";
import comunismo2 from "../../public/index/communistbook2.jpeg";
import comunismo3 from "../../public/index/title_background.jpeg";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>

          <h1>Store of Books</h1>

          <p>The best website for buy many online and phisycs books</p>

        </div>

        <div className={styles.sale}>

          <Image src={comunismo} className={styles.comunismo}alt="comunismo"/>

          <Image src={comunismo2} className={styles.comunismo2} alt="comunismo2"/>
          
          <Image src={comunismo3} className={styles.comunismo3} alt="comunismo3"/>

        </div>

        <div className={styles.footer}>
          <p>We are GODS, you should buy our books for your heal</p>
        </div>
      </div>
    </>
  )
}
