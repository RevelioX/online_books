import style from "@/styles/nav.module.css"

export default function Navigator(){
    return(
        <nav className={style.nav}>
            <div className={style.search}>

                <input type="text" placeholder="🔎Search..."/>

            </div>
            
        </nav>
    )
}