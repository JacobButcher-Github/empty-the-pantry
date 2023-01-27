import { useState } from 'react';

function Dessert_Button() {
    const [isDessert, setDessert] = useState(true);

    return(
        <div id={isDessert ? "dessert_selected" : "dessert_unselected"} className="cs 5" 
        onClick={() => setDessert(!isDessert)}>
            Dessert
        </div>
    );
}

export default Dessert_Button;