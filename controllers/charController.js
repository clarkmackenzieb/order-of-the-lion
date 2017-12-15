const axios = require('axios')
const {bnetKey} = require('../server/config')


const getChar = (req, res) => {
    let {name} = req.body;
    console.log(req.body);
    axios.get(`https://us.api.battle.net/wow/character/Wyrmrest%20Accord/${name}?locale=en_US&apikey=${bnetKey}`)
    .then(response => {
        res.status(200).json(response.data)
    })
    .catch(err => console.log(err))
}

const getCharItems = (req, res) => {
    let {name} = req.body
    axios.get(`https://us.api.battle.net/wow/character/Wyrmrest%20Accord/${name}?fields=items&locale=en_US&apikey=${bnetKey}`)
    .then(response => {
        res.status(200).json(response.data)
    })
}

module.exports = {
    getChar,
    getCharItems,
}