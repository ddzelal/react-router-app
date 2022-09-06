import React from 'react'
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import AboutUs from './AboutUs'
import NewestHeader from './NewestHeader'
import TeamBuild from './TeamBuild'

export default function News() {



  return (
    <BrowserRouter>
    <NewestHeader/ >
    <Switch>
      <Route path="/"  exact component={AboutUs} />
      <Route path="/TeamBuild" component={TeamBuild} />
    </Switch>
   </BrowserRouter>  
  )
}
