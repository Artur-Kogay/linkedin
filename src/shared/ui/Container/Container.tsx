import styles from './Container.module.scss'
import {ReactNode} from "react";

interface IContainer {
    children: ReactNode
}

function Container({children}: IContainer) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Container;