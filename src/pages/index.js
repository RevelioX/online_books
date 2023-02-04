import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/index.module.css'



import comunismo from "../../public/index_nav/communistbook.jpeg";
import comunismo2 from "../../public/index_nav/communistbook2.jpeg";
import comunismo3 from "../../public/index_nav/communistbook3.jpeg";
import noCapitalismo from "../../public/index_nav/nocapitalismo.jpeg"
import noCapitalismo2 from "../../public/index_nav/nocapitalismo2.jpeg"
import noCapitalismo3 from "../../public/index_nav/nocapitalismo3.jpeg"
import happyBook from "../../public/index_nav/happyBook.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>

          <h1>Store of Books</h1>

          <p>The best website for buy many online and phisycs books</p>

        </div>

        <h2 className={styles.sale_title}>SALE</h2>

        <div className={styles.sale}>

        <Image src={comunismo} className={styles.img}alt="comunismo"/>

        <Image src={comunismo2} className={styles.img2}alt="comunismo2"/>

        <Image src={comunismo3} className={styles.img3}alt="comunismo3"/>

        </div>

        <div className={styles.recomendado}>

          <p className={styles.recomendado_p}>Other people those recommended books</p>
          
          <div className={styles.recomendado_img}>

          <Image src={noCapitalismo} alt='NoCapitalismo'/>

          <Image src={noCapitalismo2} alt='NoCapitalismo'/>

          <Image src={noCapitalismo3} alt='NoCapitalismo'/>

          </div>
          
            
        </div>

        <div className={styles.more}>

          <Image src={happyBook} alt="Happy Book"/>

          <p>We are growing and experimenting with your buys in our web. Our future is light for you buy books here. We love you for that</p>


        </div>


        <div className={styles.footer}>

          <p>We are many people, you can enjoy for experiment with us</p>

        </div>
      </div>
    </>
  )
}
