const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// test db connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error:' + err));

const app = express();

app.get('/', (req, res) => res.send('Index'));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
