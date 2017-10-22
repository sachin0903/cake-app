describe('share data service', function(){
    beforeEach(angular.mock.module('cakeApp'));

    beforeEach(inject(function(_ShareDataService_) {
        service = _ShareDataService_;
    }));

    it('should set and get data', function(){
        service.setData({name:'cake1'});
        var data = service.getData();
        expect(data.name).toBe('cake1'); 
    });
});