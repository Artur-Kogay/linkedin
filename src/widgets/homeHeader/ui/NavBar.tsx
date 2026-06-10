'use client'

import styles from './NavBar.module.scss'
import Image from "next/image"
import { NAV_ITEMS } from "../lib"

function NavBar() {

    return (
        <nav className={styles.navigation}>
            <ul>
                {
                    NAV_ITEMS.map(({ text, img }) => (
                        <li key={text}>
                            <Image src={img} alt={text} />
                            {text}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar