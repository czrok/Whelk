var whelk = angular.module('whelk');

whelk.filter('trim', function () {
    return function (value) {
        return value.trim();
    };
});
