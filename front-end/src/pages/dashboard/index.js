import Head from 'next/head';
import {Header} from '../../components/Header'

import styles from './styles.module.scss'

export default function Dashboard(){
    return(
       <>
       <Head>
           <title>Painel | PET SHOP MANAGER</title>
       </Head>
       <div>
           <Header />
           <div className={styles.containerPrincipal}>
           <h1>Pagina Principal</h1>
           </div>
         
       </div>
       </>
    )
}