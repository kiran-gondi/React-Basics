/* 
Class Components are defind using JS classes.
They are stateful components by using the lifecycle methods.
The render method in a class component is responsible for returning JSX.
*/
import {Component} from 'react';

class AppClassComponent extends Component{
    render(){
        return <h1>Happy Hunting!</h1>;
    }
}
export default AppClassComponent; 