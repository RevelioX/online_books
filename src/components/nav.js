import style from "@/styles/nav.module.css"
import Image from 'next/image'
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { Input, Button, Link } from "@mui/joy/";


import icono from "../../public/index_nav/happyBook.png"
import React from "react";
import {useState, useEffect} from "react";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

export default function Navigator(){
    const size = useWindowSize();
    let menu = false;

    return(
        <nav id="demo_dark-mode-by-default" className={style.nav}>
            <Link href="/">
            <Image src={icono} className={style.ico}/>
            </Link>

            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>
                
            </div>

            {menu && <div className={style.options_ver}></div>}
            { size < 850 ? 
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