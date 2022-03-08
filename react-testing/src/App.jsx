// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react';


// const App = () => 
// {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const onClick = () => setToggle(prev => !prev);

//   useEffect(() => setTimeout(() => setData({}), 100), []);

//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//         { toggle === true && <div data-testid="toggle-elem">toggle</div> }
//         { data && <div style={{color: 'red'}}>data</div> }
//       <h1>Hello world!</h1>
//       <button data-testid="toggle-btn" onClick={ onClick }>Click Me</button>
//       <input onChange={ e => setValue(e.target.value) } type="text" placeholder="Input anything..."/>
//     </div>
//   );
// }

// export default App;

import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => 
{
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;