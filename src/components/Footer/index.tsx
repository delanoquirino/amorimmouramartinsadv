import { HiOutlineEnvelope } from "react-icons/hi2";
import styles from "./styles.module.scss";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Lato } from "next/font/google";

import { Link } from "react-scroll";
const lato = Lato({ weight: ["100", "400", "700"], subsets: ["latin"] });
export const Footer = () => {
  return (
    <div className={`${styles.footerSection} ${lato.className}`}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <div className={styles.services}>
            <h4>Amorim, Moura & Martins</h4>
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
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </Link>
            </p>
            <p>
              <Link
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="sobre"
              >
                Sobre
              </Link>
            </p>
            <p>
              <Link
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="equipe"
              >
                Equipe
              </Link>
            </p>
            <p>
              <Link
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="contato"
              >
                Contato
              </Link>
            </p>
          </div>
          <div className={styles.details}>
            <h4 className={styles.address}>Endereço</h4>

            <p>
              <CiLocationOn />
              <a href="#">
                Teresina/PI: Rua Ribamar Pacheco, n° 2469, bairro de Fátima
              </a>
            </p>

            <h4 className={styles.mobile}>Mobile</h4>
            <p>
              <BsTelephone />
              <a href="#">(86) 3305-6632</a>
            </p>
            <h4 className={styles.email}>Email</h4>
            <p>
              <HiOutlineEnvelope />
              <a href="#">amm.advogados@hotmail.com</a>
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <hr />© 2022 Amorim, Moura & Martins .
        </div>
      </div>
    </div>
  );
};
