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
                <Link className={style.carrito}>Carrito</Link>
                <Link className={style.perfil}>Mi Perfil</Link>
                

            </div>
            
        </nav>
    )

    const singup = document.querySelector("singup");
    const login = document.querySelector("login");
    const compras = document.querySelector("compras");
    const carrito = document.querySelector("carrito");
    const perfil = document.querySelector("perfil");
    

    singup.addEventListener("click", enlace(singup))
    login.addEventListener("click", enlace(login))
    compras.addEventListener("click", enlace(compras))
    carrito.addEventListener("click", enlace(carrito))
    perfil.addEventListener("click", enlace(perfil))

    function enlace(name){
    window.location.href ="http://localhost:3000/" + name;
    }

}