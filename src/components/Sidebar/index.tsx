"use client"

import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.scss";

import { Lato } from "next/font/google";
const lato = Lato({ weight: ["100", "400", "700"], subsets: ["latin"] });

interface SidebarProps {
    active: (isActive: boolean) => void;
   
  }


export const Sidebar = ({ active}: SidebarProps ) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <div
      sidebar={active}
      className={`${styles.container} ${lato.className}`}
      
    >
      <AiOutlineClose onClick={closeSidebar} />
      <div className={styles.content}>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSidebar}
        >
          Sobre
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSidebar}
        >
          Nossos Serviços
        </Link>
        <Link
          to="team"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSidebar}
        >
          Equipe
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={closeSidebar}
        >
          Contato
        </Link>
      </div>
      <div className={styles.contact}>
        <span>(86) 3305-6632</span>
        <div className={styles.address}>
          Teresina/PI: Rua Ribamar Pacheco, n° 2469, bairro de Fátima
        </div>
      </div>
    </div>
  );
};
