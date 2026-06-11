import styles from './GoogleButton.module.scss'
import {Button, GoogleIcon} from "@/shared";

function GoogleButton() {
    return (
        <Button className={styles.googleBtn}>
            <div className={styles.googleBtn_infoWrapper}>
                <div className={styles.googleBtn_userPhoto}>
                    <span>K</span>
                </div>
                <div className={styles.googleBtn_info}>
                    <h3>Продолжить как kai</h3>
                    <span>9571artur9571@gmail.com</span>
                </div>
            </div>
            <div className={styles.googleBtn_googleIcon}>
                <GoogleIcon />
            </div>
        </Button>
    );
}

export default GoogleButton;