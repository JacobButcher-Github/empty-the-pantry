import Head from 'next/head';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import Add_Search_Bar from '../functions/add_search_bar';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ingredient_count, setIngredient] = React.useState(0);

  return (
    <>
      <Head>
        <title>Empty the Pantry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
          <div className="logo_holder">PLACEHOLDER</div>
        <form action="" method="get" className='search_block_front'>
          <table className="meal_types">
            <tbody>
            <tr>
              <td><div id="breakfast_button" className="cs 1" onClick={toggle_breakfast()}>Breakfast</div></td>
              <td><div id="lunch_button" className="cs 2" onClick={toggle_lunch()}>Lunch</div></td>
              <td><div id="dinner_button" className="cs 3" onClick={toggle_dinner()}>Dinner</div></td>
              <td><div id="snack_button" className="cs 4" onClick={toggle_snack()}>Snack</div></td>
              <td><div id="dessert_button" className="cs 5" onClick={toggle_dessert()}>Dessert</div></td>
            </tr>
            </tbody>
          </table>
          <div className="search_block">
            <div className="search_bar">
                <input type="text" placeholder="Ingredient" size={67}></input>
              </div>
              <div className="selector_bar">
                <select name='Amount'>
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
function toggle_breakfast() {

}
function toggle_lunch() {

 }
 function toggle_dinner() {

 }
 function toggle_snack() {

 }
 function toggle_dessert() {

 }
