const axios = require('axios')
const {bnetKey} = require('../config')

// antorus id 8638
// bosses
// loot from bosses 


const getAntorusBosses = (req, res) => {
    
axios.get(`https://us.api.battle.net/wow/boss/?locale=en_US&apikey=${bnetKey}`).then(response => {
   let antorusBosses = [];
   antorusBosses = response.data.bosses.filter(boss => {
        return boss.zoneId === 8638
    })
    
    res.status(200).json(antorusBosses)
}).catch(err => console.log(err))
}

module.exports = {
    getAntorusBosses
}