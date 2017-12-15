const axios = require('axios')
const {bnetKey} = require('../server/config')


const getItemInfo = (req, res) => {
    let bossLoot = [];
    let list = req.body.loot;
    Promise.all(
        list.map(item => {
            return axios.get(`https://us.api.battle.net/wow/item/${item}?locale=en_US&apikey=${bnetKey}`)       
        })
    ).then(response => {
        bossLoot = response.map(x => {
            return x.data
        })
        res.status(200).json(bossLoot)   
    })
    
    
}

module.exports = {
    getItemInfo,
}