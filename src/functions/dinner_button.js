import { useState } from 'react';

function Dinner_Button() {
    const [isDinner, setDinner] = useState(true);

    return(
        <div id={isDinner ? "dinner_selected" : "dinner_unselected"} className="cs 3" 
        onClick={() => setDinner(!isDinner)}>
            Dinner
        </div>
    );
}

export default Dinner_Button;