import style from "../styles/compras.module.css"
import imgcompra from "../../public/index_nav/communistbook.jpeg"
import Image from "next/image"

export default function purchasedBook(){
    return(
    <div className={style.compra}> 
        <Image src={imgcompra} className={style.compra_img}/>
        <p> Title: Name </p>
        <p> Price: $9.99 </p>
        <p> Autor: Name </p>
    </div>
    )
}