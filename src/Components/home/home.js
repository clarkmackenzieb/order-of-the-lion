import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import GuildInfo from '../guildInfo/guildInfo'
import GuildNews from '../guildNews/guildNews'

import './home.css';

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }


    render(){
        return(
            <div className="home-main-container">
            <div className="home-left-container">
                <div>
                    <Link to="Members"><button>Members</button></Link>
                </div>
                <div>
                    <Link to="Raid"><button>Raid</button></Link>
                </div>
                <div>
                    <Link to="Calendar"><button>Calendar</button></Link>
                </div>
            </div>
            <div className="home-right-container">
            <GuildInfo/>
            <GuildNews/>
            </div>
            </div>
        )
    }
}