/*import React from "react";
import MyContext from "./MyContext";
import useContextChild from "./useContextChild";

const useContextParent = () =>{

    const contextValue = "Hello from Parent Context!";

    return(
        <MyContext.Provider value={contextValue}>
            /* Your Component Tree */
            /*<useContextChild></useContextChild>
        </MyContext.Provider>
    );
};

export default useContextParent;*/

import MyContext from "./MyContext";
import Child from "./useContextChild";

const Parent = () => {
  const contextValue = "Hello from Context!";

  return (
    <MyContext.Provider value={contextValue}>
      {/* Your component tree */}
      <Child></Child>
    </MyContext.Provider>
  );
};
export default Parent;



