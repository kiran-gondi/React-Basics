import { Fragment, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import ChildComponent from './Component-Props/ChildComponent';
import TestFunctionalComponent from './Component-Props/TestComponent';
import PropParent from './Component-Props/PropParent';
import AppClassComponent from './Component-Props/AppClass';
import ParentComponent from './Component-Props/ParentComponent';
import UseStateHook from './Hooks/useStateHook';
import UseEffectHook from './Hooks/useEffectHook';
import UseEffectDependencies from "./Hooks/useEffectDependencies"



function App() {
  //const [count, setCount] = useState(0);

  /*return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
  
  //  const props = {name: "Robin", purpose:"INterview"};
  // const numbers = [1, 2, 3, 4, 5];
  // return (
    // <div>
    //   <h1>Hello</h1>
    //   <p>World</p>
    // </div>

    //Fragment
    // <Fragment>
    /*<>
      <div>Interview</div>
      <div>Happy</div>
    </>*/
    /* </Fragment> */

    // <>
    //   <ChildComponent {...props}/>
    // </>
    
    // <>
    //   {
    //     numbers.map((numbers)=> (numbers * 2))
    //   }
    // </>

  //   <>
  //     <ChildComponent {...props}/>
  //     <TestFunctionalComponent></TestFunctionalComponent>
  //     <PropParent ></PropParent>
  //     <AppClassComponent></AppClassComponent>
  //     <ParentComponent></ParentComponent>
  //   </>
  // );

  //React-Routing
  // return (
  //   <AppRoute></AppRoute>
  //   );

  //Hook - useState() useEffect() useContext()/useReducer()
  // return (
  //   // <UseStateHook></UseStateHook>
  //   //<UseEffectHook></UseEffectHook>
  //   <UseEffectDependencies></UseEffectDependencies>
  // );
  

}

export default App;
