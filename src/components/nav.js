import style from "@/styles/nav.module.css"

export default function Navigator(){
    return(
        <nav className={style.nav}>
            <div className={Style.search}>

            </div>

            <div className={Style.options}>

            <Button className={Style.indice}/>

            <Button className={Style.carrito}/>

            <Button className={Style.perfil}/>

            </div>
        </nav>
    )
}