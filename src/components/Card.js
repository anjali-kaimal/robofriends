import React from "react";

// instead of class we will try out function
const Card=({name,email})=>{

    return(

        // jsx code
        <div className="tc bg-light-green dib br3 grow ma2 bw2 shadow-5 pa3">
            <img src={`https://robohash.org/${name}?200*200`} alt="robopic"></img>
            <div>
                <hr></hr>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;