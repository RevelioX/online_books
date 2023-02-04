import { Inter } from '@next/font/google'
import style from "../styles/compras.module.css"

import imgcompra from "../../public/index_nav/communistbook.jpeg"
import PurchasedBook from '@/components/purchasedBook'

export default function Compras(){
    return(
        <div className={style.body}>
            <h1 className={style.title}>Your Buys</h1>

            <div className={style.container}>

                <p>You wasn't buy here yet</p>

                <PurchasedBook/>

            </div>
        </div>
        )
}