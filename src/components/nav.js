import style from "@/styles/nav.module.css"
import { Input, Button } from "@mui/joy";

export default function Navigator(){
    return(
        <nav className={style.nav}>
            <div className={style.search}>

                <Input type="text" placeholder="🔎Search..."/>

            </div>
            
        </nav>
    )
}