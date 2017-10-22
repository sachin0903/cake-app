(function(){
    'use strict';

    cakeApp
    .directive('openDialog', function() {
    return {
        scope: {
            onSubmit: '&'
        },
        templateUrl: 'js/components/open-dialog/open-dialog.html',
        link: linkFunction,
        transclude: true,
        restrict:'E'
    };

    function linkFunction(scope) {
                scope.showDialog = function showDialog() {
                    scope.onSubmit();
            }
        }
    });
})();
