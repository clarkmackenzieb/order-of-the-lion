import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import GuildInfo from './Components/guildInfo/guildInfo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// import components
import Calendar from './Components/calendar/calendar'
// import GuildInfo from './Components/guildInfo/guildInfo'
// import GuildNews from './Components/guildNews/guildNews'
import Members from './Components/members/members'
// import Character from './Components/members/character/character'
import Navbar from './Components/navbar/navbar'
// import argusTrinketCheck from './Components/raid/argusTrinketCheck/argusTrinketCheck'
// import Boss from './Components/raid/boss/boss'
// import Loot from './Components/raid/loot/loot'
import Home from './Components/home/home'
import Raid from './Components/raid/raid'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
  }


  

  render() {
    return (
  <div>
  <Navbar/>
  <Router>
      <Switch>
          <Route component = { Members } path="/members"/>
          <Route component = { Calendar } path="/calendar"/>
          <Route component = { Raid } path="/raid"/>
          <Route component = { Home } exact path="/"/>
      </Switch>
    </Router>
  </div>
    )
  }
}

