import React,{Component} from 'react';
import axios from 'axios';


export default class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.match.params.name,
            picture: "",
            class: "",
            gear: "",
            race: "",
            ilvl: 0,
            
        }
    }

    componentDidMount(){
        axios.post("/character", { name: this.state.name})
        .then(response => {
            console.log(response.data)})
        .catch(err => console.log(err))

        axios.post("/character/items", {name: this.state.name})
        .then(response => {
            this.setState({
                gear: [response.data.back, response.data.chest, response.data.feet, response.data.finger1, response.data.finger2, response.data.hands, response.data.head, response.data.legs, response.data.mainHand, response.data.neck, response.data.shirt, response.data.shoulder, response.data.trinket1, response.data.trinket2, response.data.waist, response.data.wrist],
                ilvl: response.data.items.averageItemLevel,
                class: response.data.class,
                race: response.data.race,
                picture: response.data.thumbnail
            })
            // response.data.offHand
        })
        .catch(err => console.log(err))
    }


    render(){
        let gearList;
        if(this.state.gear.length > 0){
            gearList = this.state.gear.map((item, i) => {
                return(
                <div key={i}>
                    <p>{item.name}</p>
                </div>)
            })
        }
        return(
            <div>
            <h1>{this.state.name}</h1>
            <p>Average ilvl: {this.state.ilvl}</p>
            {gearList}
            <img alt ="character picture" src={``}/>
            </div>
        )
    }
}