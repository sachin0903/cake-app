(function(){
  'use strict';

  cakeApp
      .controller('ReviewCtrl',  ['$scope','$mdDialog','CakeDataService','ShareDataService'
      , ReviewController]);

  function ReviewController($scope, $mdDialog, cakeService, shareDataService) {     		
    $scope.showMessage = false;
    $scope.message = "";
    $scope.submit = function() {
      $scope.cake = shareDataService.getData();
      if ($scope.review.comment) {
          $scope.cake.comment= $scope.review.comment;
          $scope.cake.yumFactor = $scope.review.yumfactor;
          cakeService.addCake($scope.cake).then(function(response){
            if(response.status == 200){
              $scope.message = "Sumitted successfull!";
            } else {
              $scope.message = "Failed!";
            }
            $scope.showMessage = true;
            $mdDialog.hide();  
        });
      }      
    };
  };
})();
