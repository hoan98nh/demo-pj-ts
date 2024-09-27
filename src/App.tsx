import React from 'react';
import { Router, Routes, useRoutes } from 'react-router-dom';
import Homepage from './page/homepage';

import logo from './logo.svg';
import './App.css';
import NotFound404 from './page/notfound';
import DetailPage from './page/detailpage';

const routeConfig = [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/demo",
    children: [
      { path: "url-demo",
        children:[
          // path url
          // element
        ]
       },
    ]
  },
  {
    path: "/product/:id",
    element: <DetailPage />
  },
  {
    path: "*",
    element: <NotFound404 />
  }
];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const routes = useRoutes(routeConfig);
  return (
    <div>{routes}</div>
  );

}
export default App;
