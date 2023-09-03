import Link from "next/link";
import styles from "./styles.module.scss";
import { Lato } from "next/font/google";
import { ImLibrary } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });
const lato = Lato({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const ServicesCard = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.CardContainer} ${lato.className}`}>
        <PiSuitcaseSimple size={50} color={"var(--yellow-500)"} />
        <Link href="/">Direito Empresarial</Link>
        <div></div>
        <p>
          Trata de aspectos técnicos, jurídicos e
          voltados para a realidade e necessidade das empresas.
        </p>
      </div>
      <div className={`${styles.CardContainer} ${lato.className}`}>
        <FaUsers size={50} color={"var(--yellow-500)"} />
        <Link href="/" className={pt_serif.className}>
          Direito de Família
        </Link>
        <div></div>
        <p>
          Ajudamos nossos  clientes a solicitar
          divórcio, pensão alimentícia ou custódia dos filhos.
        </p>
      </div>
      <div className={`${styles.CardContainer} ${lato.className}`}>
        <ImLibrary size={50} color={"var(--yellow-500)"} />
        <Link href="/">Contencioso Civil</Link>
        <div></div>
        <p>
          O contencioso civil é o processo no qual as questões civis são
          resolvidas em um tribunal.
        </p>
      </div>
    </div>
  );
};
