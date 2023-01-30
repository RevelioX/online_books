import style from "nav.css"
import Button from '@mui/joy/Button';

export default function Navigator(){
    return(
        <nav>
            <div className={Style.search}>

            </div>

            <div className={Style.options}>

            <Button onClick={function(){}} className={Style.indice} />

            <Button onClick={function(){}} className={Style.carrito}/>

            <Button onClick={function(){}} className={Style.perfil}/>

            </div>
        </nav>
    )
}