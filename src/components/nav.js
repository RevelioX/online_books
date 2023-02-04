import style from "@/styles/nav.module.css"
import Image from 'next/image'
import { Input, Button, Link } from "@mui/joy";

import icono from "../../public/index_nav/happyBook.png"

export default function Navigator(){
    return(
        <nav id="demo_dark-mode-by-default" className={style.nav}>

            <Image src={icono} className={style.ico}/>

            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>
                
            </div>

            <div className={style.options}>

                <Link className={style.singup}>Sing Up</Link>
                <Link className={style.login}>Login</Link>
                <Link className={style.compras}>Mis Compras</Link>
                <Link className={style.perfil}>Mi Perfil</Link>
                <Link className={style.carrito}>Carrito</Link>

            </div>
            
        </nav>
    )
}