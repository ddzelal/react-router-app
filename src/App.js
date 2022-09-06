import React ,  { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";
import "./App.css";
// import { BrowserRouter, Router, Link } from "react-router-dom";
import GitApp from "./components/GitApp";
import News from "./components/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./components/useContex/ThemeContext";



export default function App() {

  const [theme, setTheme] = useState('black')

  const changeTheme = (color) => {
    setTheme(color);
  }

  

  return (
    <div>
      <BrowserRouter>
        <ThemeContext.Provider value={{theme , changeTheme}}>
          <HeaderMenu />
          <Switch>
            <Route path="/" exact component={News} />
            <Route path="/gitapp" component={GitApp} />
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}
