/*Created by Ujjaval on 8/7/2015.
 */

angular.module('eMart.Filters',[]);
angular.module('eMart.Filters')
    .filter('phoneFormatter', function () {

        return function (inputValue, searchCriteria) {
            if (inputValue) {
                if (searchCriteria == "US") {
                    if (inputValue.length == 10) {
                        var first = inputValue.substring(0, 3);
                        var second = inputValue.substring(3, 6);
                        var third = inputValue.substring(6, 10);
                        return "(" + first + ")(" + second + ")-" + third;
                    }
                } else if (searchCriteria == "UK") {
                    if (inputValue.length == 10) {
                        var first = inputValue.substring(0, 3);
                        var second = inputValue.substring(3, 6);
                        var third = inputValue.substring(6, 10);
                        return "(" + first  + second + ")-" + third;
                    }
                } else {
                    if (inputValue.length == 10) {
                        var first = inputValue.substring(0, 3);
                        var second = inputValue.substring(3, 6);
                        var third = inputValue.substring(6, 10);
                        return "(" + first + ")-(" + second + ")-" + third;
                    }
                }

                return inputValue;
            }
            return inputValue;
        }
    });

