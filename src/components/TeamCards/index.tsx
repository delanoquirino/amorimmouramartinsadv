import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });
const team = [
  {
    id: 1,
    name: "Ricardo Santos",
    specialist: "Direito Empresarial",
    foto: "/img/advteam.jpg",
    phone: "+55 (86) 89987–5874",
    email: "info@ricardosantos.org"
  },
  {
    id: 2,
    name: "Ana Silva",
    specialist: "Direito Civil",
    foto: "/img/advteam2.jpg",
    phone: "+55 (86) 89987–5874",
    email: "info@anasilva.org"
  },
  {
    id: 3,
    name: "Gabriela Ferreira",
    specialist: "Direito de Familia",
    foto: "/img/advteam3.jpg",
    phone: "+55 (86) 89987–5874",
    email: "info@gabrielaferreira.org"
  },
];

export const TeamCards = () => {
  return (
    <div>
      <div className={`${styles.wrap} ${pt_serif.className}`}>
        {team.map((item) => (
          <div className={styles.box}>
            <div className={styles.boxTop}>
              <Image
                className={styles.boxImage}
                src={item.foto}
                fill={true}
                alt="advogado"
              />
              <div className={styles.infoHover}>
                <p> <FaPhone color={"var(--yellow-500)"}/> {item.phone}</p>
                <p> <AiOutlineMail color={"var(--yellow-500)"}/> {item.email}</p>
              </div>
              <div className={styles.titleFlex}>
                <h3 className={styles.boxTitle}>{item.name}</h3>
                <div></div>
                <p className={styles.specialist}>{item.specialist}</p>
              </div>
            </div>
            <Link href="/" className={styles.button}></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
