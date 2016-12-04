angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.data = {};
  Links.getAll()
    .then(function(result) {
      $scope.data.links = result;
    })
    .catch(function(error) {
      console.log(error);
    });


  $scope.go = function(view) {
    $location.path(view);
  };

  $scope.signout = function() { // ## wrap with function!!!
    Auth.signout();
  };
});

