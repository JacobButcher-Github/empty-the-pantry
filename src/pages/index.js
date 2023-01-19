import Head from 'next/head'
import Link from 'next/link';
import { Inter } from '@next/font/google'

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
              <Link href="/">Front</Link>
            </div>
            <div>
              <Link href="/lists/recipes">Recipes</Link>
            </div>
            <div>
              <Link href="/lists/ingredients.js">Ingredients</Link>
            </div>
          </div>
        <div id='search_block'>
          <input type="text" placeholder="Ingredient.."></input>
          <select name='Amount'>
            <option value="very_little">Very Little</option>
            <option value="little">Little</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="very_large">Very Large</option>
          </select>
        </div>
        </main>
    </>
  )
}
