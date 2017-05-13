app.controller ( 'home' , function( $scope ){
  console.log("Loaded")
});
/*
app.controller("Example", function($scope, $interval) {
  $scope.sq = '#7bbf60';
  $scope.t1 = '#bf5e66';
  $scope.t2 = '#6064bf';
  $scope.st = '#172f21';
  $scope.d = 220;
  $scope.stw = 15;
  $scope.$watchCollection ("[sq, t1, t2, stw, st]", function( newValue, oldValue ) {
    window.st = $scope.st;
    window.stw = $scope.stw;
    draw($scope.sq, $scope.t1, $scope.t2, $scope.d);
  });
  window.st = $scope.st;
  window.stw = $scope.stw;
  draw($scope.sq, $scope.t1, $scope.t2);
});
*/
