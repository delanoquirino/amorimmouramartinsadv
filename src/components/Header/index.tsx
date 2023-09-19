import styles from "./styles.module.scss";
import Image from "next/image";

import { Link } from "react-scroll";

import { Lato } from "next/font/google";
import logo from "../../../public/logo.png";

const lato = Lato({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const Header = () => {
  return (
    <header className={`${styles.headerContainer} ${lato.className}`}>
      <div className={styles.headerContent}>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="home"
          className={styles.headerLogo}
        >
          <Image src={logo} alt="logo Amorim, Moura & Martins" />
          <p>Amorim, Moura & Martins</p>
        </Link>
        <div className={styles.headerNav}>
          <nav>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              to="sobre"
            >
              Sobre
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              to="equipe"
            >
              Equipe
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              to="contato"
            >
              Contato
            </Link>
          </nav>
          <button className={styles.headerButton}>
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              to="contato"
            >
              ENTRE EM CONTATO
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};
