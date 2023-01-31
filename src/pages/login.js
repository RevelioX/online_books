import { Button, FormLabel, Input, Sheet } from "@mui/joy"
import styles from "../styles/login.module.css"
import React from "react";
import { style } from "@mui/system";

export default function Login(){
    const [inputState,setInputState] = React.useState({username: true, password: true});

    function handleClick(){
        setInputState({username: false, password: false})
        console.log("Azul")
    }

    return(
        <div className={styles.background}>
            <Sheet className={styles.sheet}variant="outlined" color="neutral">
            <h2 className={styles.text}>Login</h2>
            <FormLabel className={styles.Labels}>Username</FormLabel>
            <Input className={styles.login_username} type="text" placeholder="RevelioX" color={ inputState.username ? "primary" : "danger"}></Input>
            <FormLabel className={styles.Labels}>Password</FormLabel>
            <Input className={styles.login_password} type="password" color={ inputState.password ? "primary" : "danger"}></Input>
            {!(inputState.username||inputState.password) && <p className={styles.error}>El nombre de usuario o la contraseña son incorrectos</p>}
            <Button color="primary" onClick={handleClick} size="sm" variant="solid" className={styles.login_button}>Login</Button>
            </Sheet>
        </div>
    )
}

