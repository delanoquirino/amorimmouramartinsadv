import { FaBalanceScaleLeft, FaHandshake, FaUsers } from "react-icons/fa"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import styles from "./styles.module.scss"
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

const results = [
    {
        icon: <FaUsers  color={"var(--yellow-500)"} size={42}/>,
        string: "1450",
        info: "Clientes Felizes"
    },
    {
        icon: <FaBalanceScaleLeft data-aos="fade-up" color={"var(--yellow-500)"} size={42}/>,
        string: "15",
        info: "Anos de Experiência"
    },
    {
        icon: <FaHandshake data-aos="fade-up" color={"var(--yellow-500)"} size={42}/>,
        string: "95%",
        info: "Casos de Sucesso"
    },
    {
        icon: <HiOutlineClipboardDocumentList  data-aos="fade-up" color={"var(--yellow-500)"} size={42}/>,
        string: "7500",
        info: "Casos atendidos"
    },
]

export const BannerResults = () => {
    return (
        <div className={`${styles.container} ${pt_serif.className}`}>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerContent}>
                    {results.map((item) => (
                        <div data-aos="fade-up">
                            {item.icon}
                            <span data-aos="fade-up">{item.string}</span>
                            <p data-aos="fade-up">{item.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}