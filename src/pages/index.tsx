import Head from "next/head";
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { Carrousel } from "@/components/Carrousel";
import { ServicesCard } from "@/components/ServicesCard";
import { AboutUs } from "@/components/AboutUs";
import { TeamCards } from "@/components/TeamCards";
import { BannerResults } from "@/components/BannerResults";
import { Testimonials } from "@/components/Testimonials";
import { Form } from "@/components/Form";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Home() {
  const contentStyle: React.CSSProperties = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Head>
        <title>Amorim, Moura & Martins</title>
        <meta name="description" content=" Amorim, Moura & Martins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" type="image/ico" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <Carrousel />
        <section className={styles.section}>
          <ServicesCard />
        </section>
        <section className={styles.AboutSection}>
          <AboutUs />
        </section>

        <section>
          <TeamCards/>
        </section>

        <section>
          <BannerResults/>
        </section>

        <section> 
          <Testimonials/>
        </section>

        <section className={styles.formSection}> 
          <Form/>
        </section>
    
      </main>
    </>
  );
}
