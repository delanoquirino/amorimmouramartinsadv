import { HiOutlineEnvelope } from "react-icons/hi2";
import styles from "./styles.module.scss";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });
export const Footer = () => {
  return (
    <div className={`${styles.footerSection} ${pt_serif.className}`}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <div className={styles.services}>
            <h4>Santos, Silva & Associados</h4>
            <p>
              Se você ou sua empresa enfrentam um desafio jurídico que exige
              aconselhamento sólido e representação qualificada, entre em
              contato conosco hoje mesmo para agendar uma consulta gratuita com
              um advogado.
            </p>
          </div>
          <div className={styles.socialMedia}>
            <h4>Social</h4>
            <p>
              <a href="#">Linkedin</a>
            </p>

            <p>
              <a href="">Facebook</a>
            </p>
            <p>
              <a href="">Instagram</a>
            </p>
          </div>
          <div className={styles.links}>
            <h4>Links Rápidos</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">Sobre</a>
            </p>
            <p>
              <a href="#">Equipe</a>
            </p>
            <p>
              <a href="#">Contato</a>
            </p>
          </div>
          <div className={styles.details}>
            <h4 className={styles.address}>Endereço</h4>

            <p>
              <CiLocationOn />
              <a href="#">+6036 Richmond hwy, Alexandria, VA USA 22303</a>
            </p>

            <h4 className={styles.mobile}>Mobile</h4>
            <p>
              <BsTelephone />
              <a href="#">+91-12225*****</a>
            </p>
            <h4 className={styles.email}>Email</h4>
            <p>
              <HiOutlineEnvelope />
              <a href="#">farazc60@gmail.com</a>
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <hr />© 2022 Santos, Silva & Associados.
        </div>
      </div>
    </div>
  );
};
