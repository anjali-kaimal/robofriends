import React from "react";
import "tachyons";
import "./GenerateRobot.css"
import ReactDOM from 'react-dom/client';
// import App from "./App";
class generateRobot extends React.Component{
    render(){
    return(
        <div>
            <form className="tc">
                <a href="#" className="tc f3 addnew" onClick={this.addClick}>Click to add your own</a><br></br>
                <div className="ownrobot" id="ownrobot" hidden>
                <input type={"text"} id="name" placeholder="Enter robot name" className="pa2 ba b--green bg-lightest-blue ma2"></input><br></br>
                <input type={"text"} id="email" placeholder="Enter robot email" className="pa2 ba b--green bg-lightest-blue ma2"></input><br></br>
            <button type="button" className="pa2 ba b--green bg-lightest-blue ma2" onClick={this.submitRobot}>Add Your Robot</button>
            </div>
            </form>
        </div>
    );
    }
    

addClick=()=>{
    ReactDOM.createRoot(document.getElementById('ownrobot').removeAttribute("hidden"));

}

submitRobot=()=>{
    // const name= ReactDOM.createRoot(document.getElementById('name').value);
    // const email= ReactDOM.createRoot(document.getElementById('email').value);
    console.log("inside submit")
    // super.addOwnRobot(name,email)
    // this.connect();
    // App.addOwnRobot(name,email);
    // super().addOwnRobot(name,email)
    // this.addOwnRobot(name,email)
   
}
}

export default generateRobot;