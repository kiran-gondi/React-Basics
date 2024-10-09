/*
5 ways to avoid prop drilling
1. Using Context API
2. Using Redux
3. Using Component Composition
4. Using Callback Function
5. Using Custom Hooks
*/

import PropChild from "./PropChild";

function PropParent(){
    return(
        <div>
            <PropChild message={'Prop Drilling'}/>
        </div>
    );
}

export default PropParent;