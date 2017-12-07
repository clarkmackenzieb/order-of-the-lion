import React,{Component} from 'react';
import GuildInfo from '../guildInfo/guildInfo'
import GuildNews from '../guildNews/guildNews'

export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }


    render(){
        return(
            <div>
            <h1>Home</h1>
            <GuildInfo/>
            <GuildNews/>
            </div>
        )
    }
}