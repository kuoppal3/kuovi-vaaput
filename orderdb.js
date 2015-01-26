// Mongodb for orders
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Order schema
var orderSchema = new Schema({
    etunimi: String,
    sukunimi: String,
    email: String,
    postiosoite: String,
    paikkakunta: String,
    postinumero: String,
    lisatiedot: String,
    yhteensa: String,
    aikaleima: Date,
    tilaus: Array
});

// Mongoose model for order
var orderModel = mongoose.model('Order', orderSchema);

module.exports = Order;

function Order(obj)
{
    this.etunimi = obj.etunimi;
    this.sukunimi = obj.sukunimi;
    this.email = obj.email;
    this.postiosoite = obj.postiosoite;
    this.paikkakunta = obj.paikkakunta;
    this.yhteensa = obj.yhteensa;
    this.postinumero = obj.postinumero;
    this.lisatiedot = obj.lisatiedot;
    this.aikaleima = obj.aikaleima;
    this.yhteensa = obj.yhteensa;
    
    // Delete hashkeys and prices from tilaus
    var tilaus = obj.tilaus;
    var tilausArray = [];
    for(var i = 0; i < tilaus.length; ++i) {
        var tilausElement = { type: tilaus[i].type, count: tilaus[i].count }; 
        tilausArray.push(tilausElement);
    }
    
    this.tilaus = tilausArray;
}

Order.prototype.add = function(fn){
  var that = this;
    
  var order = new orderModel({ etunimi: that.etunimi, 
                               sukunimi: that.sukunimi,
                               email: that.email,
                               postiosoite: that.postiosoite,
                               paikkakunta: that.paikkakunta,
                               postinumero: that.postinumero,
                               yhteensa: that.yhteensa,
                               lisatiedot: that.lisatiedot,
                               aikaleima: that.aikaleima,
                               tilaus: that.tilaus 
                            });

  order.save(function(err, order){
    if(err) { fn(err); }
    fn(null, order);
  });

};

Order.deleteAll = function(fn){
  orderModel.remove({}, function(err, tilaukset){
    if(err) { fn(err) }
  });
};

// Fetch all orders sorted by timestamp
Order.fetchAll = function(fn){
  orderModel.find({}, function(err, orders){
    if(err) { fn(err) }
    if(orders.length === 0) {
      fn();
    }
    else
    {
      // Sort by timestamp
      orders.sort(function(a, b) { return b.aikaleima - a.aikaleima});
      fn(null, orders);
    }
  });
  
};