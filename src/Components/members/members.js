import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Members extends Component{
    constructor(props){
        super(props);

        this.state = {
            members: [],
            page: 1,
            members1: [],
            members2: [],
            members3: [],
            members4: [],
            members5: [],
            members6: [],
            members7: [],
            members8: []
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(val){
        this.setState({ page: val})
    }

    componentDidMount(){
        axios.get('/guild/members').then(res => {

            this.setState({ members: res.data.members,
                            members1: res.data.members.slice(1,51),
                            members2: res.data.members.slice(51, 101),
                            members3: res.data.members.slice(101, 151),
                            members4: res.data.members.slice(151, 201),
                            members5: res.data.members.slice(201, 251),
                            members6: res.data.members.slice(251, 301),
                            members7: res.data.members.slice(301, 351),
                            members8: res.data.members.slice(351)
            
            
            })
        })
        .catch(err => console.log(err))
   }

    render(){
        let membersDisplay;
        switch(this.state.page){
            case 1:
            membersDisplay = this.state.members1.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 2:
            membersDisplay = this.state.members2.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 3:
            membersDisplay = this.state.members3.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 4:
            membersDisplay = this.state.members4.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 5:
            membersDisplay = this.state.members5.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 6:
            membersDisplay = this.state.members6.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 7:
            membersDisplay = this.state.members7.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;
            case 8:
            membersDisplay = this.state.members8.map(member => {
                return(
                    <div>
                        <img alt="character profile" src={"https://render-us.worldofwarcraft.com/character/"+member.character.thumbnail}/>
                        <p>{member.character.name}, Level {member.character.level}, Rank: {member.rank}</p>
                    </div>
                        )
                })
            break;

                }
        
        return(
            <div>
                {membersDisplay}
                <div>
                    <button onClick={(e) => {this.handleChange(1)}}>1</button>
                    <button onClick={(e) => {this.handleChange(2)}}>2</button>
                    <button onClick={(e) => {this.handleChange(3)}}>3</button>
                    <button onClick={(e) => {this.handleChange(4)}}>4</button>
                    <button onClick={(e) => {this.handleChange(5)}}>5</button>
                    <button onClick={(e) => {this.handleChange(6)}}>6</button>
                    <button onClick={(e) => {this.handleChange(7)}}>7</button>
                    <button onClick={(e) => {this.handleChange(8)}}>8</button> 
                </div>
            </div>
        )
    }
}