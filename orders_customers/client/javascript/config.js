console.log("made it to front-end config");

var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/Orders',{
    templateUrl: 'static/orders.html',
    controller: 'orderController'
  })
  .when('/Customers',{
    templateUrl: 'static/customers.html',
    controller: 'customerController'
  })
  // .when('/***UPDATE ROUTES***',{
  //   templateUrl: 'static/***UPDATE WITH PARTIAL VIEW NAME***.html',
  //   controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  // })
  .otherwise({
    redirectTo: '/'
  });
});
