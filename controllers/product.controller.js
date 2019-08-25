const db = require('../db');

module.exports.index = (req,res) =>{
    let page = parseInt(req.query.page) || 1; // n
    let perPage = 6; //x

    let start = (page - 1)*perPage;
    let end = page*perPage;

    res.render('product/views',{
        products:db.get('products').value().slice(start, end)
    });
};