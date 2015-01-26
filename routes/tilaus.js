var Order = require('.././orderdb');

exports.tilaus = function(req, res){
    res.render("tilaus", {});
};

exports.tilaukset = function(req, res){
    //Order.deleteAll();
    Order.fetchAll(function(err, orders){
        if(err) throw err;

        if(orders === undefined) {
            res.render("tilaukset", {tilaukset: []});
        } else {
            res.render("tilaukset", {tilaukset: orders});
        }

        
    });

};

exports.lisaaTilaus = function(req, res){
    var order = req.body;
    console.log(order);

    // Aikaleima
    var aikaleima = new Date();
    
    var newOrder = new Order({
        etunimi: order.etunimi,
        sukunimi: order.sukunimi,
        email: order.email,
        paikkakunta: order.paikkakunta,
        postinumero: order.postinumero,
        postiosoite: order.postiosoite,
        tilaus: order.tilaus,
        lisatiedot: order.lisatiedot,
        yhteensa: order.yhteensa,
        aikaleima: aikaleima
     });
      
    // Add order to db
    newOrder.add(function(err, order){
        if(err) throw err;
    });
}; 
