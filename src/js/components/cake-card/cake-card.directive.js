(function(){
    'use strict';
    
    cakeApp
    .directive('cakeCard', function() {
        return {
        restrict: 'E',
        scope: {
        name: '=name'
        },
        templateUrl: 'js/components/cake-card/cake-card.html'
    }});
})();