import style from "@/styles/nav.module.css"

export default function Navigator(){
    return(
        <nav className={style.nav}>
            <div className={style.search}>
            <h1>NAVIGATOR</h1>
            </div>

            <div className={style.options}>

            <Button className={Style.indice}/>

            <Button className={Style.carrito}/>

            <Button className={Style.perfil}/>

            </div>
        </nav>
    )
}