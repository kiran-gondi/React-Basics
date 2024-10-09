import PropGrandChild from "./PropGrandChild";

function PropChild({message}){
    return(
        <div>
            <PropGrandChild message={message}/>
        </div>
    );
}

export default PropChild;