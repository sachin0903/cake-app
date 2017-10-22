(function(){
    var $compile,
        $scope,
        element;
 
    beforeEach(module('cakeApp', 'templates'));

    describe('cake card directive', function(){

        beforeEach(inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
        }));

        it('should contain the name', function(){
            element = $compile('<cake-card name="name"></cake-card>')($scope);
            $scope.name = "test";
            $scope.$digest();
            expect(element.html()).toContain("test");
        });
    });
})();