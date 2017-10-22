    (function(){
    'use strict';
        cakeApp
            .factory('ApiDataService',['$http', '$q',apiDataServiceFactory]);

        function apiDataServiceFactory($http, $q){
        var getHeaders = function (additionalHeaders) {
            var headers = {
                'Content-Type': 'application/json'
            };

            return headers;
        };

        var getConfig = function (url, method, headers) {

            var config = {
                url: url,
                method: method,
                headers: getHeaders(headers)
            };

            return config;
        };

        var sendRequest = function (config) {
            var deferred = $q.defer();

            $http(config)
                .success(apiCallSuccess)
                .error(apiCallFailed);
               
            return deferred.promise;

            function apiCallSuccess(data, status, headers, config, statusText) {
                deferred.resolve({
                    data: data,
                    status: status,
                    headers: headers,
                    config: config,
                    statusText: statusText
                });
            }
            function apiCallFailed(data, status, headers, config, statusText) {
                deferred.reject({
                    data: data,
                    status: status,
                    headers: headers,
                    config: config,
                    statusText: statusText
                });
            }
        };

        var get = function (url, params, headers) {
            var config = getConfig(url, 'GET', headers);
            config.params = params;
            return sendRequest(config);
        };

        var post = function (url, data, headers) {
            var config = getConfig(url, 'POST', headers);
            config.data = data;
            return sendRequest(config);
        };

        var put = function (url, data, headers) {
            var config = getConfig(url, 'PUT', headers);
            config.data = data;
            return sendRequest(config);
        };

        var del = function (url, params, headers) {
            var config = getConfig(url, 'DELETE', headers);
            config.params = params;
            return sendRequest(config);
        };

        return {
            get: get,
            post: post,
            put: put,
            del: del
        };
    };
})();