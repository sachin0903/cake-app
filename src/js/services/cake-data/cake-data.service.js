    (function(){
    'use strict';
        cakeApp
            .factory('CakeDataService', ['ApiDataService',cakeDataServiceFactory]);

        function cakeDataServiceFactory(apiData){
        var baseUrl = 'http://52.31.91.48:5000/api/cakes'

        var init = function(url){
            baseUrl = baseUrl + url;
        };

        function getCakes(){
            return apiData.get(baseUrl);
        };

        function getCakeById(id){        
            return apiData.get(baseUrl, {id: id});
        }

        function addCake(data){
            return apiData.post(baseUrl, data);
        }

        function updateCake(data){
            return apiData.put(baseUrl, data);
        }

        function removeCake(id){
            return apiData.delete(baseUrl, {id: id});
        }

        return{
            init: init,
            getCakes: getCakes,
            getCakeById: getCakeById,
            addCake: addCake,
            updateCake: updateCake,
            removeCake: removeCake
        };
    };
 })();

    