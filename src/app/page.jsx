import styles from "./page.module.css";
import Image  from "next/image";
import Hero from '/public/images/hero.svg'
import Plan from "@/components/Plan/Plan";
import Coins from "@/components/Coins/Coins";
export default function Home() {
  return (
    <>
    <main className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Best Fifa Store Account</h1>
        <p className={styles.description}> we love Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque est maxime esse animi illum eveniet excepturi, nobis, quam ratione quisquam. Ducimus voluptatem doloremque voluptates rem consectetur earum maiores dolore!</p>
        <button className={styles.button}>
          read more
        </button>
      </div>
      <div>
      <Image className={styles.image} src={Hero} alt="Our Hero " />
      </div>
      
    </main>
    <section className={styles.sec}>
    <div className={styles.divder}>
          شحن كوينز  24
      </div>
   
    </section>
    <Plan/>
    <section className={styles.sec}>
    <div className={styles.divder}>
        تشكيلات فيفا
      </div>
   
    </section>
    <Coins/>
    </>
  );
}
