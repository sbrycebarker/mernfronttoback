const express = require('express');
const connectDB = require('./config/db');

const app = express();

//  CONNECT To Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => res.send('Well, hello there!'));

app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
