(function(){

    var $controller,
        cakeDataService,
        $scope,
        $rootScope,
        $mdDialog,
        deferred,
        shareDataService;
    var mockPromise = {
                then: function(success) {
                    success({status:200});
                    return this;
                }
            };

    var mockCakeObj={
        id:1,
        name:'test 1',
        comment: '',
        yumFactor:'',
        imageUrl:''
    }
    
    var mockApi = {
        getCakes: function () {
                    return {
                        then: function () { return angular.noop; }
                    }
                },
        addCake: function () {
                    return {
                        then: function () { return angular.noop; }
                    }
                }
    };

    describe('cake review controller', function(){
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
                shareDataService = $injector.get('ShareDataService');
                
            });
            
            spyOn(shareDataService, 'getData').and.returnValue(mockCakeObj);
            spyOn($mdDialog, 'hide').and.returnValue({ then: angular.noop });
            spyOn(cakeDataService, 'addCake').and.returnValue(mockPromise);
        });

        it('should define controller', function(){
            var $scope = $rootScope.$new();         
            var controller = $controller('ReviewCtrl', {$scope : $scope});
            expect(controller).toBeDefined();
        });
    
         it('should not call cake data service if review name is empty', function(){
            var $scope = $rootScope.$new(); 
            $scope.review = {};
            $scope.review.name = '';        
            var controller = $controller('ReviewCtrl', {$scope : $scope, $mdDialog: $mdDialog});
            $scope.submit();
            expect(shareDataService.getData).toHaveBeenCalled();
            expect(cakeDataService.addCake).not.toHaveBeenCalled();
        });

         it('should call cake data service and hide dialog box', function(){
            var $scope = $rootScope.$new(); 
            $scope.review = {};
            $scope.review.name = 'test';        
            $scope.review.comment = 'comment';
            $scope.review.yumfactor = '5';
            var controller = $controller('ReviewCtrl', {$scope : $scope, $mdDialog: $mdDialog});
            $scope.submit();
            expect(cakeDataService.addCake).toHaveBeenCalled();
            expect($mdDialog.hide).toHaveBeenCalled();
        });
    });

})();