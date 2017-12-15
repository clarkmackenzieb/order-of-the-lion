import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import components
import Calendar from './Components/calendar/calendar'
// import GuildInfo from './Components/guildInfo/guildInfo'
// import GuildNews from './Components/guildNews/guildNews'
import Members from './Components/members/members'
import Character from './Components/members/character/character'
// import Navbar from './Components/navbar/navbar'
// import argusTrinketCheck from './Components/raid/argusTrinketCheck/argusTrinketCheck'
import Boss from './Components/raid/boss/boss'
// import Loot from './Components/raid/loot/loot'
import Home from './Components/home/home'
import Raid from './Components/raid/raid'



export default (
    <Switch>
        <Route component = { Character} path="/members/:name"/>
        <Route component = { Members } exact path="/members"/>
        <Route component = { Calendar } path="/calendar"/>
        <Route component = { Raid } exact path="/raid"/>
        <Route component = { Home } exact path="/"/>
        <Route component = { Boss } path="/raid/boss/:id"/>
    </Switch>
)