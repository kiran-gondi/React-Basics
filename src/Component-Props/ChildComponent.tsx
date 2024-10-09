import { Component } from "react";

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h2>Message: {this.props.message}</h2>
                {/* <h2>Message: {this.props.name}  {this.props.purpose}</h2> */}
            </div>
        );
    }
}
export default ChildComponent;