console.log('made it to front-end controller');

myApp.controller('orderController', function ($scope, orderFactory){
  $scope.orders = [];
  orderFactory.getOrders(function(data){
    $scope.orders = data;
    console.log($scope.orders);
  });

  $scope.addorder = function(){
    $scope.orders.push($scope.neworder);
    $scope.neworder = {};
  };

  $scope.deleteorder = function(order){
    $scope.orders.splice($scope.orders.indexOf(order),1);
  }
});


// myApp.controller('customerController', function ($scope, customerFactory){
//   $scope.customers = [];
//   customerFactory.getCustomers(function(data){
//     $scope.customers = data;
//     console.log($scope.customers);
//   });
//
//   $scope.addcustomer = function(){
//     // console.log($scope.newcustomer);
//     customerFactory.create($scope.newcustomer, function(data) {
//        $scope.customers = data;
//        $scope.newcustomer = {};
//      });
//   };
//
//   $scope.deletecustomer = function(customer){
//     customerFactory.delete(customer);
//   }
// });
