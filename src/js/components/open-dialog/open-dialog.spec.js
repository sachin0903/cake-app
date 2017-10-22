(function(){
    var $compile,
        $scope,
        $httpBackend,
        element;
 
    beforeEach(module('cakeApp', 'templates'));

    describe('open dialog directive', function(){

        beforeEach(inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
            element = $compile('<open-dialog on-submit="onsubmit"></open-dialog>')($scope);
            $scope.$digest();
        }));

        it('should exceute on submit when show dialog is called', function(){
            var scope = element.isolateScope();
            spyOn(scope, 'onSubmit');
            scope.showDialog();
            expect(scope.onSubmit).toHaveBeenCalled();
        });
    });
})();
