import styles from './HomeHeader.module.scss'
import Image from 'next/image'
import NavBar from './NavBar'
import {Button, Container} from "@/shared";
import Link from "next/link";

export default async function HomeHeader() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_content}>
                    <Link href="/">
                        <Image src={'/images/logo.png'}
                            alt='linkedin logo'
                            width={102}
                            height={55}
                            priority/>
                    </Link>
                    <NavBar />
                    <div className={styles.btns}>
                        <Button variant={'primary'}>Присоединиться</Button>
                        <Button variant={'primary_fill'}>Войти</Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
