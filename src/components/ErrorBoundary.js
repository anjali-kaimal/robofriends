import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true});
    }
    render(){
        if(this.state.hasError){
            return <h1 className="heading">Oops. That's not good. Please wait while we work on this.</h1>
        }

        return this.props.children
    }
}
export default ErrorBoundary;