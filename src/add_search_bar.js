import React from 'react';

function Add_Search_Bar() {
    return(
        <div class="search_block">
            <div class="search_bar">
                <input type="text" placeholder="Ingredient.."></input>
              </div>
              <div class="selector_bar">
                <select name='Amount'>
                  <option value="very_little">Very Little</option>
                  <option value="little">Little</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="very_large">Very Large</option>
                </select>
              </div>
        </div>
    )
}

export default Add_Search_Bar;