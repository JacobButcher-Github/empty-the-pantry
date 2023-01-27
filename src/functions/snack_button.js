import React from 'react';

function Snack_Button() {
    return(
        <div id="snack_button" className="cs 4" onClick={toggle_snack}>Snack</div>
    );
}

export async function toggle_snack() {
    alert("WORK PLEASE");
}

export default Snack_Button;