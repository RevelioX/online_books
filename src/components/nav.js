import style from "@/styles/nav.module.css"
import Image from 'next/image'
import { Input, Button, Link } from "@mui/joy";

import icono from "../../public/index_nav/happyBook.png"

export default function Navigator(){
    return(
        <nav id="demo_dark-mode-by-default" className={style.nav}>
            <Link href="/">
            <Image src={icono} className={style.ico}/>
            </Link>

            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>
                
            </div>

            <div className={style.options}>

                <Link href="/signup" className={style.options_Link}>Sing Up</Link>
                <Link href="/login" className={style.options_Link}>Login</Link>
                <Link href="/compras" className={style.options_Link}>Mis Compras</Link>
                <Link href="/carrito" className={style.options_Link}>Carrito</Link>
                <Link href="/perfil" className={style.options_Link}>Mi Perfil</Link>
                

            </div>
            
        </nav>
    )

}