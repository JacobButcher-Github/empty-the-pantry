import Link from 'next/link';

export default function Recipes_Page() {
    return(
        <>
            <h1>Recipes List TODO</h1>
            <div id='top_bar'>
                <div>
                    <Link href="/">Front</Link>
                </div>
                <div>
                    <Link href="/lists/recipes">Recipes</Link>
                </div>
                <div>
                    <Link href="/lists/ingredients">Ingredients</Link>
                </div>
            </div>
        </>
    );
}