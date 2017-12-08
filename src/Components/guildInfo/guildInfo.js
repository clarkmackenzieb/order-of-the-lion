import React, {Component} from 'react';
import axios from 'axios';

export default class GuildInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "Order of the Lion",
            realm: "Wyrmrest Accord",
            members: 0,
            level: 25,
            achievementPts: 0
        }
    }

    componentDidMount(){
         axios.get('/guild/members').then(res => {
             this.setState({ members: res.data.members.length})
         })
         .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.members} Members</h1>
            </div>
        )
    }
}