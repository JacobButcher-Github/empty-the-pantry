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
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcyzjooraslkglaxwbkd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjeXpqb29yYXNsa2dsYXh3YmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4Njg5NzEsImV4cCI6MTk5MDQ0NDk3MX0.kA7a4uyD0VAbVg_NHxdskUYv6DWXwB6S_goHqEAvm9k"
const supabase = createClient(supabaseUrl, supabaseKey)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ingredient_count, setIngredient] = React.useState([{name: "", amount: ""}]);
  const [recipes, setRecipes] = React.useState([]);

  function handleIngredientChange(i, e) {
    const values = [...ingredient_count];
    values[i].name = e.target.value;
    setIngredient(values);
  }

  function handleAmountChange(i, e) {
    const values = [...ingredient_count];
    values[i].amount = e.target.value;
    setIngredient(values);
  }

  function add_Ingredient() {
    const values = [...ingredient_count];
    values.push({ name: "", select: "" });
    setIngredient(values);
  }

  function remove_Ingredient(i) {
    const values = [...ingredient_count];
    values.splice(i, 1);
    setIngredient(values);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = ingredient_count.map((ingredient,index) => ({
      ingredient: ingredient,
      amount: ingredient.amount
    }));
    const ingredientId = [];
    for (let i = 0; i < searchQuery.length; i++){
      const {data: ingredientsData, error: ingredientsError } = await supabase
        .from('ingredients')
        .select('ingredient_id')
        .eq('name', searchQuery[i].ingredient)
        .eq('amount', searchQuery[i].amount);
      if(ingredientsData){
        ingredientId.push(ingredientsData[0].id);
      }
      else{
        console.error(ingredientsError);
        return;
      }
      const { data: recipesData, error: recipesError } = await supabase
        .from('recipes')
        .select('name, description, image_url')
        .in('id', recipeIds);
      if (!recipesData) {
        console.error(recipesError);
        return;
      }
      setRecipes(recipesData.map((recipeData) => ({
        name: recipeData.name,
        description: recipeData.description,
        image: recipeData.image
      })));
      setRecipes(recipes);
    }
  };

  React.useEffect(() => {
    console.log("recipes changed", recipes);
  }, [recipes]);

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
        <form action="" method="get" className='search_block_front' onSubmit={handleSubmit}>
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
          <div className="fields">
            {ingredient_count.map((input, index) => (
            <div key={index} className="fields">
            <input
              type="text"
              value={input.name}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <select
              value={input.select}
              onChange={(event) => handleAmountChange(index, event)}
            >
              <option value="">Amount</option>
              <option value="option1">Very Small</option>
              <option value="option2">Small</option>
              <option value="option3">Medium</option>
              <option value="option4">Large</option>
              <option value="option5">Very Large</option>
            </select>
            <button type="button" onClick={() => remove_Ingredient(index)}>
              Remove Ingredient
            </button>
          </div>
        ))}
          </div>
          <div className='button_array'>
            <button type="button" onClick={() => add_Ingredient()}>
              Add Ingredient
            </button>
            <div className='all_I_got'>
              <input type="checkbox" name="This is all I have" />
              <label htmlFor="This is all I have" className='Labelio'>This is all I have </label>
            </div>
            <button type="submit">Search</button>
          </div>  
          </div>
        </form>
        {recipes.map((recipe, index) => (
      <div key={index}>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <img src={recipe.image} alt={recipe.name} />
      </div>
      ))}
        </main>
    </>
  )
}
