console.log('made it to front-end controller');
// feed data to our different views
// get data from Factory and determine when to update data in DB through Factory
// can interact with multiple Factories
myApp.controller('main', ['$scope', 'mainFactory', function ($scope, mainFactory){
  $scope.people = [];
  mainFactory.get(function(data){
    $scope.people = data;
    console.log($scope.people);
  });

  $scope.create = function(){
    peopleFactory.create($scope.newperson, function(data) {
       $scope.people = data;
       $scope.newperson = {};
     });
  };

  // $scope.delete***UPDATE VARIABLE NAME*** = function(***UPDATE VARIABLE NAME***){
  //   $scope.***UPDATE VARIABLE NAME***.splice($scope.***UPDATE VARIABLE NAME***.indexOf(player),1);
  // }
}]);
