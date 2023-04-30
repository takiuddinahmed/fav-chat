import { AppProps } from "next/app";
import Head from "next/head";
import 'global.css'

export default function MyApp({Component, pageProps}: AppProps){
    return <> 
    <Head><title>Fav Chat</title></Head>
    <Component {...pageProps}/></>

}