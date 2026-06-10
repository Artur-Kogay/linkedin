import styles from './HomePage.module.scss'
import {Container, HeroImage} from "@/shared";

export default async function Home() {
  return (
    <main className={styles.main__content}>
      <Container>
        <section className={styles.hero}>
          <div className={styles.hero__left}>
            <h1 className={styles.title}>Добро пожаловать <br /> в сообщество <br /> специалистов!</h1>
          </div>
          <div className={styles.hero__right}>
            <HeroImage className={styles.hero__right_image}/>
          </div>
        </section>
      </Container>
    </main>
  );
}
