    (function(){
    'use strict';
        cakeApp
        .factory('ShareDataService', [shareDataServiceFactory]);

        function shareDataServiceFactory(){
            var dataObj = {};
            
            var getData = function(){
                return dataObj;
            };

            var setData = function(data) {
                dataObj = data;
            };

            return {
                getData: getData,
                setData: setData
            };
        }
})();