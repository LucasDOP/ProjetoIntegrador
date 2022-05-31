import Head from 'next/head'
import {Header} from '../../components/Header'

export default function Clientes(){
    return(
        <>
        <Head>
            <title>Cliente | Pet Shop Manager</title>
        </Head>
        <div>
            <Header/>
            <h1>Teste Clientes</h1>
        </div>
        </>
    )
}