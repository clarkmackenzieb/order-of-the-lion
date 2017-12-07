const express = requires('express');
const cors = requires('cors');
const {json} = require('body-parser');

const port = 3005;

const app = express();

app.use(json())

// app.use(express.static('./public'));
