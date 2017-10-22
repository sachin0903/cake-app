(function(){

'use strict';

    var $controller,
        cakeDataService,
        $scope,
        $rootScope,
        $mdDialog,
        deferred;
    
    var mockApi = {
        getCakes: function () {
                    return {
                        then: function () { return angular.noop; }
                    }
                },
        post: angular.noop
    };

    describe('cake gallery controller', function(){
        beforeEach(module('cakeApp'));

        beforeEach(inject(function(_$controller_, _$rootScope_, _$q_, _$mdDialog_){
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            deferred = _$q_.defer();
            $mdDialog = _$mdDialog_;
        }));

        beforeEach(function(){
            inject(function ($injector) {
                cakeDataService = $injector.get('CakeDataService');
            });
            spyOn(cakeDataService, 'getCakes').and.returnValue(deferred.promise);
            spyOn($mdDialog, 'show');
        });

        it('should define controller', function(){
            var $scope = $rootScope.$new();         
            var controller = $controller('CakeCtrl', {$scope : $scope});
            expect(controller).toBeDefined();
        });

        it('should call cake data service on start up', function(){
            var $scope = $rootScope.$new();         
            var controller = $controller('CakeCtrl', {$scope : $scope});
            expect(cakeDataService.getCakes).toHaveBeenCalled();
        });

         it('should open dialog window when show advanced method called', function(){
            var $scope = $rootScope.$new();         
            var controller = $controller('CakeCtrl', {$scope : $scope, $mdDialog: $mdDialog});
            $scope.showAdvanced();
            expect($mdDialog.show).toHaveBeenCalled();
        });

    });

})();