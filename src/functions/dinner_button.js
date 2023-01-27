import React from 'react';

function Dinner_Button() {
    return(
        <div id="dinner_button" className="cs 3" onClick={toggle_dinner}>Dinner</div>
    );
}

export async function toggle_dinner() {
    alert("WORK PLEASE");
}

export default Dinner_Button;