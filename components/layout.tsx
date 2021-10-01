import Footer from './footer'
import Head from 'next/head'

//@ts-ignore
export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Dual Docs</title>
            <meta name="Dualsoft official documentation" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <main>{children}</main>
        <Footer />
    </>
  )
}