import React from "react";

const SearchBox=({searchchange})=>{
    return(
        <div className="pa2 tc">

            {/* on change means that every time a change happens in the textbox, we need to pass that event to the method mentioned in it */}
        <input type="search" placeholder="Search Robots.." className="pa3 ba b--green bg-lightest-blue" onChange={searchchange}/>
        </div>
    );
}

export default SearchBox;