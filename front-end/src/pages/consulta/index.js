import Head from 'next/head'
import {Header} from '../../components/Header'

export default function Produtos(){
    return(
        <>
        <Head>
            <title>Produtos | Pet Shop Manager</title>
        </Head>
        <div>
            <Header/>
            <h1>Teste Produtos</h1>
        </div>
        </>
    )
}