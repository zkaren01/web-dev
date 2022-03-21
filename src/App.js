import './App.css';
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Index from "./components/labs";
import Tuiter from "./components/tuiter/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path={"/"} exact={true} element={<HelloWorld/>}/>
            <Route path={"/hello"} exact={true} element={<HelloWorld/>}/>
            <Route path={"/labs"} exact={true} element={<Index/>}/>
            <Route path={"/tuiter"} exact={true} element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
