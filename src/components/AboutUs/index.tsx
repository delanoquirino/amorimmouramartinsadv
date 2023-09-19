import Image from "next/image";
import { ButtonConsult } from "../ButtonConsult";
import styles from "./styles.module.scss";
import oldman from "../../../public/img/retrato-elegante-velho.jpg"
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });
export const AboutUs = () => {
  return (
    <div className={`${styles.aboutContainer} ${pt_serif.className}`} id="sobre">
      <div className={styles.aboutImage}>
          <div className={styles.boxCard}>
            <div>
                <div className={styles.boxContent}>
                    <h1 data-aos="fade-up" data-aos-delay="150">
Sobre Nós</h1>
                    <p data-aos="fade-up" data-aos-delay="100">
                      Ao colocar seu caso nas mãos de nossos advogados, você está colocando
                      seu caso nas mãos de profissionais comprometidos em alcançar o melhor
                      resultado possível.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="50"><cite>João Santos, </cite><small>Especialista em Direito Empresarial</small></div>
                    <ButtonConsult/>
                </div>
                
            </div>
            <div className={styles.ceoImg}>
                <Image data-aos="fade-up" data-aos-delay="100" src={oldman} alt="foto do ceo do escritorio" fill={true}/>
            </div>

          </div>
      </div>
    </div>
  );
};
