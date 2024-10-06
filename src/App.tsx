import { Fragment, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ChildComponent from './ChildComponent';

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
  const props = {name: "Robin", purpose:"INterview"};
  return (
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

    <>
      <ChildComponent {...props}/>
    </>
  );
}

export default App;
