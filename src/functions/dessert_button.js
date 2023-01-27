import React from 'react';

function Dessert_Button() {
    return(
        <div id="dessert_button" className="cs 5" onClick={toggle_dessert}>Dessert</div>
    );
}

export async function toggle_dessert() {
    alert("WORK PLEASE");
}

export default Dessert_Button;