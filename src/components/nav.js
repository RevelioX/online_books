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

                <Link href="http://localhost:3000/singup" className={style.options_Link}>Sing Up</Link>
                <Link href="http://localhost:3000/login" className={style.options_Link}>Login</Link>
                <Link href="http://localhost:3000/compras" className={style.options_Link}>Mis Compras</Link>
                <Link href="http://localhost:3000/carrito" className={style.options_Link}>Carrito</Link>
                <Link href="http://localhost:3000/perfil" className={style.options_Link}>Mi Perfil</Link>
                

            </div>
            
        </nav>
    )

}