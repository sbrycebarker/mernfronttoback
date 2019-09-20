const express = require('express');
const connecDB = require('./config/db');

const app = express();

//  CONNECT To Database

connectDB();

app.get('/', (req, res) => res.send('Well, hello there!'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
