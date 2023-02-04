import { Button, FormLabel, Input, Sheet } from "@mui/joy"
import styles from "../styles/login.module.css"
import React from "react";
import { style } from "@mui/system";

export default function Signup(){
    const [inputState,setInputState] = React.useState({username: true, password: true});

    function handleClick(){
        setInputState({username: false, password: false})
    }

    return(
        <div className={styles.background}>
            <Sheet className={styles.sheet}variant="outlined" color="neutral">

            <h2 className={styles.text}>SignUp</h2>

<<<<<<< HEAD
            <FormLabel className={styles.Labels}>Gmail</FormLabel>
            <Input required className={styles.signup_gmail} type="text" placeholder="RevelioX" color={ inputState.username ? "primary" : "danger"}></Input>

            <FormLabel className={styles.Labels}>Username</FormLabel>
            <Input required className={styles.signup_username} type="text" placeholder="RevelioX" color={ inputState.username ? "primary" : "danger"}></Input>

            <FormLabel className={styles.Labels}>Password</FormLabel>
            <Input required className={styles.signup_password} type="password" color={ inputState.password ? "primary" : "danger"}></Input>

            <FormLabel className={styles.Labels}>Confirm Password</FormLabel>
            <Input required className={styles.signup_password_confirm} type="password" color={ inputState.password ? "primary" : "danger"}></Input>

            <Button color="primary" onClick={handleClick} size="sm" variant="solid" className={styles.signup_button}>Sign Up</Button>
=======
            <FormLabel className={styles.Labels}>Username</FormLabel>
            <Input required className={styles.login_username} type="text" placeholder="RevelioX" color={ inputState.username ? "primary" : "danger"}></Input>
            
            <FormLabel className={styles.Labels}>Password</FormLabel>
            <Input required className={styles.login_password} type="password" color={ inputState.password ? "primary" : "danger"}></Input>

            <FormLabel className={styles.Labels}>Confirm Password</FormLabel>
            <Input required className={styles.login_password} type="password" color={ inputState.password ? "primary" : "danger"}></Input>

            <FormLabel className={styles.Labels}>Email</FormLabel>
            <Input required className={styles.login_password} type="email" color={ inputState.password ? "primary" : "danger"}></Input>

            <Button color="primary" onClick={handleClick} size="sm" variant="solid" className={styles.login_button}>Sign Up</Button>
>>>>>>> 4c64b286a4d1c40966f9b2fb62704a16ca53bbcc
            </Sheet>
        </div>
    )
}