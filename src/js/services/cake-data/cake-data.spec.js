(function(){
    describe('cake data service', function(){
        var mockApi,
            service,
            apiDataService;

        var mockApi = {
            get: angular.noop,
            post: angular.noop,
            put: angular.noop,
            delete: angular.noop
        };

        beforeEach(angular.mock.module('cakeApp'));

        beforeEach(function () {
            module('cakeApp', function ($provide) {
                $provide.value('ApiDataService', mockApi);
            });
        });

        beforeEach(function(){
            inject(function ($injector) {
                apiDataService = $injector.get('ApiDataService');
            });
        });

        beforeEach(inject(function(_CakeDataService_) {
            service = _CakeDataService_;
        }));

        it('should call api.get method when getcake() method called', function(){
            spyOn(mockApi, 'get');
            service.init('api');
            service.getCakes();
            expect(mockApi.get).toHaveBeenCalled(); 
        });

        it('should call api.get method when getCakeById() method called', function(){
            spyOn(mockApi, 'get');
            service.init('api');
            service.getCakeById(1);
            expect(mockApi.get).toHaveBeenCalled(); 
        });

        it('should call api.post method when cake data sumitted', function(){
            spyOn(mockApi, 'post');
            service.init('api');
            service.addCake({id:1,name:'birthday cake'});
            expect(mockApi.post).toHaveBeenCalled(); 
        });

        it('should call api.put method when cake data updated', function(){
            spyOn(mockApi, 'put');
            service.init('api');
            service.updateCake({id:1,name:'birthday cake123'});
            expect(mockApi.put).toHaveBeenCalled(); 
        });

        it('should call api.delete method when cake data deleted', function(){
            spyOn(mockApi, 'delete');
            service.init('api');
            service.removeCake(1);
            expect(mockApi.delete).toHaveBeenCalled(); 
        });

    });
})();