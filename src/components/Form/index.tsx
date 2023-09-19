
import styles from "./styles.module.scss"
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export const Form = () => {
    return (
        <div className={`${styles.container} ${pt_serif.className}`} id="contato">
            
            <form className={styles.form}>
                    <h1>Consulta grátis</h1>
                    <div className={styles.formGrid}>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Telefone" />
                        <select name="" id="">
                            <option value="">Direito Empresarial</option>
                            <option value="">Direito Civil</option>
                            <option value="">Direito de Familia</option>
                        </select>
                    </div>
                    <textarea name="" id="" placeholder="Escreva sua mensagem"></textarea>
                   <button className={styles.buttonForm}>Enviar</button>
            </form>
        </div>
    )
}