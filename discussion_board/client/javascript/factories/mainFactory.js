console.log('made it to the FE factory')
// make $http calls to our DB
// works with controller
myApp.factory('mainFactory', ['$http', function($http){
  var people = [];
  var factory = {};
  factory.get = function(callback){
    $http.get('/people').then(function(output) {
      people = output;
      callback(people);
    });
  };
  factory.create = function(info, callback){
    $http.post('/boards', info).then(function(output){
      people.push(output);
      callback(people)
    })
  }
  return factory;
}]);
