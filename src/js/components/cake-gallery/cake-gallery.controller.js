(function(){
    'use strict';

    cakeApp
    .controller('CakeCtrl',['$scope','$mdDialog','CakeDataService','ShareDataService', CakeController])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });
    function CakeController($scope, $mdDialog,CakeDataService, ShareDataService){
        $scope.cakes = [];
        
        function getCakes(){
            CakeDataService.getCakes().then(function(response){
                $scope.cakes = response.data.cakes;
            });
        };

        $scope.showAdvanced = function(ev, cake){
            showDialog($mdDialog, $scope, ev, cake, 'js/components/cake-gallery/cake-details.html');
        }

        $scope.addReview = function(ev, cake){
            showDialog($mdDialog, $scope, ev, cake, 'js/components/cake-review/cake-review.html');
            ShareDataService.setData(cake);
        }

        getCakes();
    }

    function showDialog($mdDialog,scope, ev, data, template){
        $mdDialog.show({
                locals: {cakeData: data},
                controller: DialogController,
                templateUrl: template,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: scope.customFullscreen
            });
    }

    function DialogController($scope, $mdDialog, cakeData) {
        $scope.cake = cakeData;

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    };
    
})();

