import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Raid extends Component{
    constructor(props){
        super(props);

        this.state = {
            bosses: [],
        }
    }

    componentDidMount(){
        axios.get('/antorus/bosses').then(res => {
            this.setState({ bosses: res.data})
        })
    }

    render(){
        return(<div>
            {this.state.bosses.map((boss, i) => {
                return(
                <Link key={i} to={`/raid/boss/${boss.id}`}><h1>{boss.name}</h1></Link>
                )
            })}
            </div>
        )
    }
}