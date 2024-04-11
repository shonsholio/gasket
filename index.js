const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const exp = require('constants');

const app = express();

//IMPORTING ROUTES
const mainRoutes = require('./routes/main');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

//MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//ROUTES
app.use('/', mainRoutes)

//STATIC FILES
app.use(express.static(path.join(__dirname, './public')))

app.listen(app.get('port'), () => {
  console.log('CONECTADOS AL PUERTO ' + (app.get('port')))
})