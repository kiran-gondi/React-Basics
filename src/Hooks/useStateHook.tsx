import {useState} from "react";

function UseStateHook(){
    //array destructuring
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
        console.log(`Count: ${count + 1}`);
    };

    return(
        <div>
            <p>Stateful Example</p>
            <p>Count: {count}</p>  {/*Updating */}
            <button onClick={increment}>Click Me!</button>
        </div>
    );
}

export default UseStateHook;