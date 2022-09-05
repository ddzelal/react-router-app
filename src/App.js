import React from "react";
import HeaderMenu from "./components/HeaderMenu";
import "./App.css";
// import { BrowserRouter, Router, Link } from "react-router-dom";
import GitApp from "./components/GitApp";
import News from "./components/News";
import { BrowserRouter , Switch , Route } from "react-router-dom";

export default function App() {
  return (

    <div>
      <BrowserRouter>
        <HeaderMenu />
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/gitapp" component={GitApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
