import style from "@/styles/nav.module.css"
import Image from 'next/image'
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { Input, Button, Link } from "@mui/joy/";


import icono from "../../public/index_nav/happyBook.png"

export default function Navigator(){
    let menu = false;
    let width = screen.width;
    return(
        <nav id="demo_dark-mode-by-default" className={style.nav}>
            <Link href="/">
            <Image src={icono} className={style.ico}/>
            </Link>

            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>
                
            </div>

            {menu && <div className={style.options_ver}></div>}
            { width < 850 ? 
            <div className={style.options_ver}>
                <Menu ></Menu>
            </div> 
            : 
            <div className={style.options_hor}>
            <Link href="/signup" className={style.options_Link}>Sing Up</Link>
            <Link href="/login" className={style.options_Link}>Login</Link>
            <Link href="/compras" className={style.options_Link}>Mis Compras</Link>
            <Link href="/carrito" className={style.options_Link}>Carrito</Link>
            <Link href="/perfil" className={style.options_Link}>Mi Perfil</Link>

            </div>
}
            
            
        </nav>
    )

    
}