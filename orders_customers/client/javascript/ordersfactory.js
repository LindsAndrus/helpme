console.log('made it to factory');

myApp.factory('orderFactory', function($http){
  var order = [];
  var factory = {};
  factory.getOrders = function(callback){
    $http.get('/orders').success(function(output) {
      orders = output;
      callback(orders);
    });
  };
  factory.create = function(callback){
    $http.post('/order/new', info).success(function(output){
      orders.push(output);
      callback(orders);
    });
  };
  factory.delete = function(callback){
    $http.post('/order/remove', orderDestroy).success(function(output){
      orders.splice(orders.indexOf(output),1);
    })
  };
  return factory;
});

// myApp.factory('customerFactory', function($http){
//   var customers = [];
//   var factory = {};
//   factory.getCustomers = function(callback){
//     $http.get('/customers').success(function(output) {
//       customers = output;
//       callback(customers);
//     });
//   };
//   factory.create = function(info, callback){
//     // console.log(info);
//     $http.post('/customer/new', info).success(function(output){
//       customers.push(output);
//       callback(customers);
//     });
//   };
//   factory.delete = function(customerDestroy){
//     $http.post('/customer/remove', customerDestroy).success(function(output){
//       customers.splice(customers.indexOf(output),1);
//     })
//   };
//   return factory;
// });
