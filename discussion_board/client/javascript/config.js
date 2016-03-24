console.log("made it to front-end config");
var myApp = angular.module('myApp', ['ngRoute']);
// VAR creates a memory box that we can reference in javascript
// angular.module runs a piece of angular that creates a module obj
  // a reference in HTML that we can access our ang obj via ng-app - ex: "myApp"
  // what other modules does this rely on? (ex: [ngRoute])
myApp.config(function ($routeProvider) {
  $routeProvider
  // .when('/index',{
  //   templateUrl: 'static/***UPDATE WITH PARTIAL VIEW NAME***.html',
  //   controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  // })
  // .when('/***UPDATE ROUTES***',{
  //   templateUrl: 'static/***UPDATE WITH PARTIAL VIEW NAME***.html',
  //   controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  // })
  // .when('/***UPDATE ROUTES***',{
  //   templateUrl: 'static/***UPDATE WITH PARTIAL VIEW NAME***.html',
  //   controller: '***UPDATED WITH FRONT-END CONTROLLER NAME***'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // });
});
