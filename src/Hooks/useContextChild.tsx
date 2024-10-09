/*import  {useContext} from "react";
import MyContext from "./MyContext";

const useContextChild = () =>{
    const contextValue = useContext(MyContext);

    return <p>{contextValue}</p>;

    // return (
    //     <MyContext.Consumer>
    //         {(contextValue)} => <div>{contextValue}</div>
    //     </MyContext.Consumer>
    // );
};

export default useContextChild;*/
import  { useContext } from "react";
import MyContext from "./MyContext";

const Child = () => {
  const contextValue = useContext(MyContext);

  return <p><h2>{contextValue}</h2></p>;
  // return (
  //   <MyContext.Consumer>
  //     {(contextValue) => <div>{contextValue}</div>}
  //   </MyContext.Consumer>
  // );
};
export default Child;