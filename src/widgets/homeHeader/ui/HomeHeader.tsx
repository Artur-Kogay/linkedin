import styles from './HomeHeader.module.scss'
import Image from 'next/image'
import NavBar from './NavBar'
import {Button, Container} from "@/shared";

export default async function HomeHeader() {
    return (
        <Container>
        <header className={styles.header}>
                <Image src={'/public/icons/logo.svg'} alt='linkedin logo' width={102} height={25}/>
                <NavBar />
                <div className={styles.btns}>
                    <Button variant={'primary'}>Присоединиться</Button>
                    <Button variant={'primary_fill'}>Войти</Button>
                </div>
        </header>
        </Container>

    )
}
