"use client"

import { Carousel} from "antd";
import styles from "./styles.module.scss";
import { PT_Serif } from "next/font/google";
import { ButtonConsult } from "../ButtonConsult";
const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export const Carrousel = () => {

  return (
    <Carousel autoplay>
      <div
        className={`${styles.contentStyleOne} ${styles.contentStyle} ${pt_serif.className}`}
      >
        <div
         
          className={styles.contentCarousel}
        >
          <span  data-aos="fade-up" data-aos-delay="150">Conosco </span>
          <h1  data-aos="fade-up"  data-aos-delay="100">Você está sempre um passo à frente</h1>
          <h2  data-aos="fade-up"  data-aos-delay="50">
            As estratégias de nossos advogados irão ajudá-lo a resolver questões
            jurídicas muito complexas.
          </h2>
          <ButtonConsult />
        </div>
      </div>
      <div
        className={`${styles.contentStyleTwo} ${styles.contentStyle} ${pt_serif.className}`}
      >
        <div  className={styles.contentCarousel}>
          <span data-aos="fade-up" data-aos-delay="150">Nós oferecemos</span>
          <h1 data-aos="fade-up"  data-aos-delay="100">Ajuda jurídica acessível e eficaz</h1>
          <h2 data-aos="fade-up"  data-aos-delay="50">
            Nossa equipe especializada de advogados e consultores terá prazer em
            fornecer a assistência jurídica necessária
          </h2>
          <ButtonConsult />
        </div>
      </div>
      <div
        className={`${styles.contentStyleThree} ${styles.contentStyle} ${pt_serif.className}`}
      >
        <div  className={styles.contentCarousel}>
          <span data-aos="fade-up" data-aos-delay="150">Com nossos serviços</span>
          <h1 data-aos="fade-up"  data-aos-delay="100">Você receberá amplo suporte jurídico</h1>
          <h2 data-aos="fade-up"  data-aos-delay="50">
            Temos anos de experiência na prestação de assistência jurídica em
            diversas esferas do direito.
          </h2>
          <ButtonConsult />
        </div>
      </div>
    </Carousel>
  );
};