import Link from "next/link";

import styles from "./styles.module.scss"
import { Lato} from "next/font/google";


const lato = Lato({  weight: ['100', '400','700'], subsets: ['latin'] })
export const ButtonConsult = () => {
  return (
    <button data-aos="fade-up" className={`${styles.buttonconsult} ${lato.className}`}>
       <Link href="/">Solicite uma Consulta Gratuita</Link>
    </button>
  );
};



