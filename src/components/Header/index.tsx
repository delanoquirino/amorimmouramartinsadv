import styles from "./styles.module.scss"
import Image from "next/image"
import Link from "next/link"

import { Lato } from 'next/font/google'
import logo from "../../../public/logo.png"
import { ActiveLink } from "../ActiveLink"

const lato = Lato({  weight: ['100', '400','700'], subsets: ['latin'] })

export  const Header = () => {
    
    return (
        
        <header className={`${styles.headerContainer} ${lato.className}`}>
            <div className={styles.headerContent}>
                <Link href="/" className={styles.headerLogo}>
                    <Image src={logo} alt="logo Santos, Silva & Associados" />
                    <p>Santos, Silva & Associados</p>
                </Link>
                <div className={styles.headerNav}>
                    <nav>
                        <ActiveLink  href="/">Home</ActiveLink>
                        <ActiveLink href="/sobre" >Sobre</ActiveLink>
                        <ActiveLink href="/equipe">Equipe</ActiveLink>
                        <ActiveLink href="/contato">Contato</ActiveLink>
                    </nav>
                        <button className={styles.headerButton}>
                            <Link href="/" >
                            Solicite uma Consulta Gratuita
                            </Link>
                        </button>
                </div>
            </div>
        </header>
    )
}