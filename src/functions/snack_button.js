import { useState } from 'react';

function Snack_Button() {
    const [isSnack, setSnack] = useState(true);

    return(
        <div id={isSnack ? "snack_selected" : "snack_unselected"} className="cs 4" 
        onClick={() => setSnack(!isSnack)}>
            Snack
        </div>
    );
}

export default Snack_Button;