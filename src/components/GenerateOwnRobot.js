import React from "react";
import "./GenerateOwnRobot.css"
import { ReactDOM } from "react";


const GenerateOwnRobot = ({ addClick,clickSubmit }) => {

    // return card list
    return (

        // jsx code
        <div>
            <form className="tc">

                <a href="#" className="tc f3 addnew" onClick={ addClick}>Click to add your own</a><br></br>
                <div className="ownrobot" id="ownrobot">
                    <input type={"text"} id="name" placeholder="Enter robot name" className="pa2 ba b--green bg-lightest-blue ma2"></input><br></br>
                    <input type={"text"} id="email" placeholder="Enter robot email" className="pa2 ba b--green bg-lightest-blue ma2"></input><br></br>
                    {/* <button type="button" className="pa2 ba b--green bg-lightest-blue ma2" onSubmit={}>Add Your Robot</button> */}
                </div>
            </form>
        </div>
    );

}
export default GenerateOwnRobot;