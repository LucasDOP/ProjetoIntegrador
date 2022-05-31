import styles from './styles.module.scss'

import Link from 'next/link'


export function Header() {
  
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/dashboard">
                <a className={styles.logo}>Pet Shop<br/>Manager</a>
                </Link>
                <div className={styles.mobileMenu}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
                <ul className={styles.navlist}>

                    <li data-cy="dashboard">
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    </li>

                    <li data-cy="cadastro">
                    <Link href="/cadastro">
                        Cadastro
                    </Link>
                    </li>

                    <li data-cy="consulta">
                    <Link href="/consulta">
                        Consulta
                    </Link>
                    </li>

                    <li data-cy="logout">
                    <Link href="/">
                        Logout
                    </Link>
                    </li>

                </ul>
            </nav>
            <script src="./mobile-navbar.js"></script>
        </header>
        

    )
}