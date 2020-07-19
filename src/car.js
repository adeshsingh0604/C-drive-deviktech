import React from "react";



class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {Name: "adesh"};
    }
    changename=()=>{this.setState({Name:"Vikash"})}
    render(){
    return (
        <div>
            <div>
                <h2>Hi {this.state.Name}</h2>
                <h2>{this.props.model} {this.state.Name}</h2>
            </div>
            <div>
               <button type="button" onClick={this.changename}>button</button>
            </div>
        </div>
    
        )
    }
}

export default Car