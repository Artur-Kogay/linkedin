import styles from './NavBar.module.scss'
import { NAV_ITEMS } from "../lib"
import Link from "next/link";

function NavBar() {

    return (
        <nav className={styles.navigation}>
            <ul>
                {NAV_ITEMS.map(({ text, Img, url }) => (
                    <li key={text}>
                        <Link href={url}>
                            <Img width={25} height={25} />
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar