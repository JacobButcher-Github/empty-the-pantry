import Head from 'next/head';
import Link from 'next/link';
import { createRoot } from 'react-dom/client';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

function Add_Search(){
  const search = document.getElementById("search");
  const root = createRoot(search);
  root.render(
  <>
  <input type="text" placeholder="Ingredient.."></input>
  <select name='Amount'>
    <option value="very_little">Very Little</option>
    <option value="little">Little</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
    <option value="very_large">Very Large</option>
  </select>
  </>
);
}

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
          <div class="logo_holder">PLACEHOLDER</div>
        <div id='search_block_front' class='placeholder'>
          <table class="meal_types">
            <tbody>
            <tr>
              <td><div id="breakfast_button" class="cs 1">Breakfast</div></td>
              <td><div id="lunch_button" class="cs 2">Lunch</div></td>
              <td><div id="dinner_button" class="cs 3">Dinner</div></td>
              <td><div id="snack_button" class="cs 4">Snack</div></td>
              <td><div id="dessert_button" class="cs 5">Dessert</div></td>
            </tr>
            </tbody>
          </table>
          <div id="search">
            <input type="text" placeholder="Ingredient.."></input>
            <select name='Amount'>
              <option value="very_little">Very Little</option>
              <option value="little">Little</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="very_large">Very Large</option>
            </select>
          </div>
          <button type="button" id="add_igredient" onClick={Add_Search}>Add Ingredient</button>
        </div>
        </main>
    </>
  )
}