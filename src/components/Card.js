import React from "react";
import "./Card.css"

// instead of class we will try out function
const Card=({name,email})=>{

    return(

        // jsx code
        <div className="tc cardBox dib br3 grow ma2 bw2 shadow-5 pa3">
            {/* <img src={`https://robohash.org/${name}?200*200`} alt="robopic"></img> */}
            <img src={`https://avatars.dicebear.com/api/big-ears-neutral/${name}.svg`} alt="avatar" height={"300"} width={"300"}></img>
            <div>
                <hr></hr>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;