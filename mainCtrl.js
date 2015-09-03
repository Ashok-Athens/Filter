/*Created by Ujjaval on 8/7/2015.
 */

angular.module('eMart.controllers',[]);
angular.module('eMart.controllers')
    .controller("mainCtrl",
    function ($scope) {

        $scope.addresses = [
            {'state': 'US'},
            {'state': 'UK'},
            {'state': 'IN'}
        ];

        $scope.lov_state = [
            {'lookupCode': 'US', 'description': 'United_State'},
            {'lookupCode': 'UK', 'description': 'United_kingdom'},
            {'lookupCode': 'IN', 'description': 'Inida'},
            {'lookupCode': 'DE', 'description': 'Delaware'}
        ];

    });
