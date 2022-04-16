const express = require('express')
const {engine} = require('express-handlebars')
const methodOverride = require('method-override')
const path = require('path');
const app = express();
const router = require('./routes/index')
const db = require('./config/db/index')
const PORT = 5000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride("_method"))


// views
app.engine('hbs', engine( {extname: '.hbs'} ) ,)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

// routes
app.use(router)

// db
db.connect()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
