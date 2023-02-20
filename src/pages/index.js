import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import Add_Search_Bar from '../functions/add_search_bar';
import React from 'react';
import Breakfast_Button from '@/functions/breakfast_button';
import Lunch_Button from '@/functions/lunch_button';
import Dinner_Button from '@/functions/dinner_button';
import Snack_Button from '@/functions/snack_button';
import Dessert_Button from '@/functions/dessert_button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ingredient_count, setIngredient] = React.useState(0);

  return (
    <>
      <Head>
        <title>Empty the Pantry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/care-it.ico" />
      </Head>
        <main>
          <div className='top_bar'>
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
        <img className='banner'src="/banner.png"></img>
        <form action="" method="get" className='search_block_front'>
          <table className="meal_types">
            <tbody>
            <tr>
              <td><Breakfast_Button /></td>
              <td><Lunch_Button /></td>
              <td><Dinner_Button /></td>
              <td><Snack_Button /></td>
              <td><Dessert_Button /></td>
            </tr>
            </tbody>
          </table>
          <div className="search_block">
            <div className="search_bar">
                <input type="text" placeholder="Ingredient"></input>
              </div>
              <div className="selector_bar">
                <select name='Amount'>
                  <option value="amount">Amount</option>
                  <option value="very_little">Very Little</option>
                  <option value="little">Little</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="very_large">Very Large</option>
                </select>
              </div>
          </div>
          { [...Array(ingredient_count)].map((_, i) => <Add_Search_Bar key={i} />) }
          <div className='button_array'>
            <button type="button" id="add_igredient" onClick={() => setIngredient(ingredient_count + 1)}>
              Add Ingredient
            </button>
            <div className='all_I_got'>
              <input type="checkbox" name="This is all I have" />
              <label htmlFor="This is all I have" className='Labelio'>This is all I have </label>
            </div>
            <button type="submit">Search</button>
          </div>  
        </form>
        </main>
    </>
  )
}
