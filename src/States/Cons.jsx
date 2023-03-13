import React,{Component} from "react";

class Cons extends Component {
    constructor()
    {
        super()
        this.state={
            userName : "Daddus"
        }
    }
    render()
    {
        return(
            <h1>{this.state.userName}</h1>
        )
    }
}
export default Cons