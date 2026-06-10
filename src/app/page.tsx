import styles from './HomePage.module.scss'
import {Container, HeroImage} from "@/shared";

export default async function Home() {
  return (
    <main className={styles.main__content}>
      <Container>
        <section className={styles.hero}>
          <div>
            <h1>Добро пожаловать <br /> в сообщество <br /> специалистов!</h1>
          </div>
          <div>
            <HeroImage />
          </div>
        </section>
      </Container>
    </main>
  );
}
