import { Button, FormLabel, Input, Sheet } from "@mui/joy"
import styles from "../styles/login.module.css"

export default function Login(){
    return(
        <div className={styles.login}>
            <Sheet className={styles.sheet} variant="outlined" color="neutral">
            <FormLabel>Username</FormLabel>
            <Input className={styles.login_username} type="text" placeholder="RevelioX"></Input>
            <FormLabel>Password</FormLabel>
            <Input className={styles.login_password} type="password"></Input>
            <Button color="primary" disabled={false} onClick={function(){}} size="md" variant="solid" className={styles.login_button}>Login</Button>
            </Sheet>
        </div>
    )
}

