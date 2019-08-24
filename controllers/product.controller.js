module.exports.index = (req,res) =>{
    res.render('product/views',{
        products:db.get('products').value()
    });
};