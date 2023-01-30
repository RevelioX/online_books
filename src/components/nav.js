import style from "@/styles/nav.module.css"
import { Button } from "@mui/joy";

export default function Navigator(){
    return(
        <nav className={style.nav}>
            <div className={style.search}>
            <h1>NAVIGATOR</h1>
            </div>

            <div className={style.options}>

            <Button className={style.indice}>Indice</Button>

            <Button className={style.carrito}>Carrito</Button>

            <Button className={style.perfil}>Perfil</Button>

            </div>
        </nav>
    )
}