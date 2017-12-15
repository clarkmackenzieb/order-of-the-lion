import React,{Component} from 'react';
import axios from 'axios';

export default class Boss extends Component{
    constructor(props){
        super(props);

        this.state = {
            bossLoot: "",
            bossInfo: "",
            lootInfo: []
        }
    }
// https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-58263.jpg
// http://www.wowhead.com/item=
    componentDidMount(){
        axios.get(`/boss/loot/${this.props.match.params.id}`)
            .then(response => this.setState({ bossLoot: response.data}))
            .catch(err => console.log(err))

        axios.get(`/boss/info/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ bossInfo: response.data})   
                axios.post(`/boss/item/`, {loot: this.state.bossLoot.loot})
                        .then(response => {
                            this.setState({lootInfo: response.data})
                        })
                        .catch(err => console.log(err))    
                
            })
            .catch(err => console.log(err))
}
// <img alt="item" src={`http://media.blizzard.com/wow/icons/56/${item.icon}.jpg`|| "http://media.blizzard.com/wow/icons/56/inv_gizmo_02.jpg"}/>

    render(){
        return(
            <div>
            <h1>{this.state.bossInfo.name}</h1>
            <p>{this.state.bossInfo.description}</p>
            {this.state.lootInfo.map((item, i) => {
                    return(
                        <div key={i}>

                            <a href={`http://www.wowhead.com/item=${item.id}`}><p>{item.name}</p></a>
                        </div>
                    )
            })}
            </div>
        )
    }
}