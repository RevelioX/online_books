import style from "nav.css"

export default function Navigator(){
    return(
        <nav>
            <div className={Style.search}>

            </div>

            <div className={Style.options}>

                <div className={Style.Indice}></div>

                <div className={Style.carrito}></div>

                <div className={Style.Perfil}></div>


            </div>
        </nav>
    )
}