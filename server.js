if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
var app = express();

//middleware

app.use(cors());
app.use(bodyParser());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout','layouts/layout' );
app.use(expressLayouts);
//Add router config
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening to port 3000')
})

//Connect to the DB

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('error', function(error) {
    console.error('We have error connecting to DB', error);
})

db.once('open', () => {
    console.log('Connected to MongoDB successfully');
})