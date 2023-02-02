import style from "@/styles/nav.module.css"
import Image from 'next/image'
import { Input, Button, Link } from "@mui/joy";

import icono from "../../public/favicon.ico"

export default function Navigator(){
    return(
        <nav id="demo_dark-mode-by-default" className={style.nav}>

            <Image src={icono} className={style.ico}/>

            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>
                
            </div>

            <div className={style.options}>

                <Link>Sing Up</Link>
                <Link>Login</Link>
                <Link>Mis Compras</Link>
                <Link>Mi Perfil</Link>
                <Link>Carrito</Link>

            </div>
            
        </nav>
    )
}