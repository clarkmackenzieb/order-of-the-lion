const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const port = process.env.PORT || 3005;

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance); 
    console.log("yay")}
)

app.use(json())

// app.use(express.static('./public'));

const guildController = require('../controllers/guildController')
const raidController = require('../controllers/raidController')
const charController = require('../controllers/charController')
const dataController = require('../controllers/dataController')
//character endpoints 
app.post('/character', charController.getChar)
app.post('/character/items', charController.getCharItems)

//guild endpoints 
app.get('/guild/members', guildController.getMembers);

//data endpoints 
app.post('/boss/item/', dataController.getItemInfo);

//raid endpoints
app.get('/antorus/bosses', raidController.getAntorusBosses);
app.get('/boss/info/:id', raidController.getBossInfo);
app.get('/boss/loot/:id', raidController.getBossLoot);


app.listen(port, () => {
    console.log(`I'll be right by your side till ${port}.`)
})
