const axios = require('axios')
const {bnetKey} = require('../server/config')


const getMembers = (req,res) => {
    axios.get('https://us.api.battle.net/wow/guild/Wyrmrest%20Accord/Order%20of%20the%20Lion?fields=members&locale=en_US&apikey='+bnetKey).then(result => {
        res.status(200).json(result.data)
    })
    .catch(err => console.log(err))
}

module.exports = {
    getMembers
}