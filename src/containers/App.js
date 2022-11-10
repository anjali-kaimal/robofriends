import CardsList from "../components/CardsList";
import React from "react";
import SearchBox from "../components/SearchBox";
import "./App.css";
import loading from "./loading.svg";
import "tachyons";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/ErrorBoundary"
import GenerateOwnRobot from "../components/GenerateOwnRobot";

class App extends React.Component {

    // constructor gets called on loading the app
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    // this function gets called after render
    //AJAX
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => {
                // user.unshift({name:"anjali kaimal",email:"anjali.kaimal@gmail.com",id:11})
                console.log(user)
                return this.setState({robots:user})});
    }
   

    // each time change happens, this is invoked
    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })

    }

    addOwnRobot=(roboname,roboemail)=>{
        // this.state.robots.unshift({name:roboname,email:roboemail,id:this.state.robots.length+1})
        console.log("inside app js")
    }

    onAddClick=(event)=>{
        
    }


    // render gets called after constructor and also each time any update happens
    render() {
        const filteredRobots = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length===0)
        {
            return (
            <div className="loader"><img className="loader" src={loading} alt="loading"></img></div>)
        }
        else{
        return (
            <div className="tc" >
                <h1 className="heading f1">FIND MY FRIENDS</h1>
                <SearchBox searchchange={this.onSearchChange} />
              {/* <GenerateRobot addrobo={this.addOwnRobot}/> */}
              {/* <GenerateOwnRobot addClick={this.onAddClick} clickSubmit={this.addOwnRobot}/> */}
              <Scroll>
                <ErrorBoundary>
                <CardsList robots={filteredRobots} />
                </ErrorBoundary>
                </Scroll>
            </div>
        );
        }
    }
}

export default App;
