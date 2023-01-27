import { useState } from 'react';

function Lunch_Button() {
    const [isLunch, setLunch] = useState(true);

    return(
        <div id={isLunch ? "lunch_selected" : "lunch_unselected"} className="cs 2" 
        onClick={() => setLunch(!isLunch)}>
            Lunch
        </div>
    );
}

export default Lunch_Button;