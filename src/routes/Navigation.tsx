// import {
//   BrowserRouter as Router, NavLink, Route, Switch
// } from 'react-router-dom';
// import { ShoppingPage } from '../component/02-component-pattern/pages/ShoppingPage';

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from "../App";


// Abajo del brower router
      // <div className="main-layout">


export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<App />} />
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}