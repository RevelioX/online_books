import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import style from "../styles/compras.module.css"

import imgcompra from "../../public/index_nav/communistbook.jpeg"
export default function Compras(){
    return(
        <>
            <body className={style.body}>
                <h1 className={style.title}>Your Buys</h1>

                <div className={style.container}>

                    <p>You wasn't buy here yet</p>
                    
                    <div className={style.compra}> 
                        <Image src={imgcompra} className={style.compra_img}/>
                        <p> Title: Name </p>
                        <p> Price: $9.99 </p>
                        <p> Buy to: Name </p>
                    </div>

                </div>
            </body>
        </>
    )
}