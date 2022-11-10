import Card from "./Card";
import React from "react";


const CardsList = ({ robots , onPageLoad}) => {
  // return card list
  return (

    // jsx code
    <div onLoad={onPageLoad}>
      {
        // this is a list of objects of card
        robots.map((user, i) => {
          return <Card key={i} name={user.name} email={user.email} />
        })
      }
    </div>
  );
}

export default CardsList;