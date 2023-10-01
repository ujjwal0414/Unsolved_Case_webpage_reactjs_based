import React from "react";
import { Component } from "react";
class Blogs extends Component{
    constructor(){
        super();
        this.state={
            stateCount:0,
            name:"Ujjwal",
            cnt:"eifei"
        }
    }
    update=()=>{
        this.setState({
            stateCount:this.state.stateCount+1,
             name:"Khushi"
         });
     }
    render(){
       
        return(
            <div>
                <h3>Hello {this.state.stateCount%2==0?"Ujjwal":"Khushi"}</h3>
                <button onClick={this.update}>Update</button>
            </div>
            
        )
    }
   
}
export default Blogs;