const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');

const authMiddlewres = require('./middlewares/auth.middlewares')


const port = 3000;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('0910249092040230490iwouwoijojo'))
app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
    res.render('index',{
        name : 'AAA'
    });
});
app.use('/users',authMiddlewres.requierAuth ,userRoute);
app.use('/auth',authRoute);

app.listen(port, () => {
    console.log('Server running on post ' + port)
});
