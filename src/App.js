import React, { Component }  from 'react';
import HeaderMenu from './components/HeaderMenu';
import "./App.css";
import { BrowserRouter, Router , Link } from 'react-router-dom';
import GitApp from './components/GitApp';
// import AppMenuBar from "./components/AppMenuBar";

export default function App() {

  return (
    <div>
    <HeaderMenu />
    <GitApp / >
    </div>
  );
}