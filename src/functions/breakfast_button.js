import { useState } from 'react';

function Breakfast_Button() {
    const [isBreakfast, setBreakfast] = useState(true);

    return(
        <div id={isBreakfast ? "breakfast_selected" : "breakfast_unselected"} className="cs 1" 
        onClick={() => setBreakfast(!isBreakfast)}>
            Breakfast
        </div>
    );
}

export default Breakfast_Button;