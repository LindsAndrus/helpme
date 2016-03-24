console.log('made it to routes');
// var Customers = require('./../controllers/customers.js');
var Orders = require('./../controllers/orders.js');

module.exports = function(app){
  // app.get('/customers', Customers.index);
  // app.post('/customer/new', Customers.create);
  // app.post('/customer/remove', Customers.delete);
  app.get('/orders', Orders.index);
  app.post('/order/new', Orders.create);
  app.post('/order/remove', Orders.delete);
};
