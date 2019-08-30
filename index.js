require('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productsRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route')

const authMiddlewres = require('./middlewares/auth.middlewares')
const sessionMiddlewres = require('./middlewares/session.middlewares')


const port = 3000;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMiddlewres)

app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
    res.render('index',{
        name : 'AAA'
    });
});
app.use('/users',authMiddlewres.requierAuth ,userRoute);
app.use('/auth',authRoute);
app.use('/products',productsRoute);
app.use('/cart',cartRoute);


app.listen(port, () => {
    console.log('Server running on post ' + port)
});
