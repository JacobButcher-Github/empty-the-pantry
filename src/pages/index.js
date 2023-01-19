import Head from 'next/head'
import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Empty the Pantry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
        <div id='top_bar'>
          <div>
            <Link href="/src/pages/index.js">Front</Link>
          </div>
        </div>
        </main>
    </>
  )
}
