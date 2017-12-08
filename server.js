const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');


const port = 3005;

const app = express();

app.use(json())

// app.use(express.static('./public'));

const guildController = require('./controllers/guildController')

//character endpoints 


//guild endpoints 
app.get('/guild/members', guildController.getMembers);

//data endpoints 



app.listen(port, () => {
    console.log(`I'll be right by your side till ${port}.`)
})
