import style from "@/styles/nav.module.css"
import { Input, Button, Link } from "@mui/joy";

export default function Navigator(){
    return(
        <nav id="demo_dark-mode-by-default" className={style.nav}>
            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>
                <Link>About Us</Link>
                <Link>Catalogo</Link>
                

            </div>
            
        </nav>
    )
}