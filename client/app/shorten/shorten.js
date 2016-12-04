angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.isHidden = true;

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(){
        $location.path('/links'); // ## Why is this redirecting to '/'?
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.go = function(view) {
    $location.path(view);
  };

  $scope.signout = function() { // ## wrap with function!!!
    Auth.signout();
  };

  $scope.submitForm = function() {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

    // console.log(typeof $scope.link.url);
    if ( rValidUrl.test($scope.link.url) ) {
      $scope.isHidden = true;
      // Links.addOne();
      $scope.addLink();
    } else {
      $scope.isHidden = false;
    }
  };
});
