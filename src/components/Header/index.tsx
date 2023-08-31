import styles from "./styles.module.scss"
import Image from "next/image"
import Link from "next/link"

import { Raleway } from 'next/font/google'
import logo from "../../../public/logo.png"
import { usePathname } from 'next/navigation';
import { ActiveLink } from "../ActiveLink"

const raleway = Raleway({  weight: ['100','200', '400','700'], subsets: ['latin'] })

export  const Header = () => {
    const currentRoute = usePathname();
   
    return (
        
        <header className={`${styles.headerContainer} ${raleway.className}`}>
            <div className={styles.headerContent}>
                <Link href="/" className={styles.headerLogo}>
                    <Image src={logo} alt="logo law & justice" />
                    <p>Law & Justice</p>
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
                            ENTRE EM CONTATO
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}