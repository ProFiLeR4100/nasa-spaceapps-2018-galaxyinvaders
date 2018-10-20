//TODO only for markup
var myAppDev = angular.module('mockApp', ['NasaSpaceApps', 'ngMockE2E', 'ngMockE2EAsync']);

var RandomService = {};
RandomService.STATUS_COLORS = ['_green', '_red', '_gray'];
RandomService.STATUSES = ["UP", "up", "ALERT", "alert", "DOWN", "down", "NOT_ACTIVATED", "not_activated"];
RandomService.randomBigInteger = function(){
    var bi = "9";
    for(var i =0;i<18;i++){
        bi+= RandomService.generateRandomDigit(0,9);
    }
    return bi;
};
RandomService.randomItem = function (items) {
    return items[Math.floor(Math.random() * items.length)];
};
RandomService.randomBoolean = function () {
    return RandomService.generateBoolean();
};
RandomService.getStatus = function () {
    return RandomService.randomItem(RandomService.STATUSES);
};
RandomService.getStatusColor = function () {
    return RandomService.randomItem(RandomService.STATUS_COLORS);
};
RandomService.generateRandomDoubleDigit = function (min, max, decimal) {
    return RandomService.generateRandom(min, max, decimal);
};
RandomService.generateBoolean = function () {
    return RandomService.randomItem([true, false]);
};
RandomService.generateRandomDigit = function (min, max) {
    return RandomService.generateRandom(min, max, 0);
};
RandomService.generateRandomString = function () {
    return Math.random().toString(36).substring(4);
};
RandomService.generateRandom = function (min, max, round) {
    var ch = min + (max - min) * Math.random();
    if (round !== undefined) {
        return Number(ch.toFixed(round));
    }
    return ch;
}

myAppDev.run(function ($httpBackend, $q, $timeout, $log, $filter) {
    var REST_URL = '/';
    var stubServer = createStubServer($q, $timeout, $log, $filter);

    $httpBackend.whenAsync("GET", /^(.(?!.*\.json))*$/).respond(handler);
    $httpBackend.whenAsync("POST", /^(.(?!.*\.json))*$/).respond(handler);
    $httpBackend.whenAsync("PUT", /^(.(?!.*\.json))*$/).respond(handler);
    $httpBackend.whenAsync("UPDATE", /^(.(?!.*\.json))*$/).respond(handler);
    $httpBackend.whenAsync("DELETE", /^(.(?!.*\.json))*$/).respond(handler);

    function handler(method, url, data, headers, params) {
        var urlData = parseUrl(url);
        return stubServer.getStubData(method, urlData.url, urlData.params);
    }

    function parseUrl(url) {
        var url = url.slice(REST_URL.length);
        var params = {};
        if (url.split('?', 2).length == 2 && url.split('?', 2)[1]) {
            var query = url.split('?', 2)[1];
            var keyValues = query.split('&');
            for (var i = 0; i < keyValues.length; i++) {
                var keyValue = keyValues[i].split('=', 2);
                params[keyValue[0]] = keyValue[1];
            }
        }
        return {
            url: url.split('?', 2)[0],
            params: params
        }
    }

    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenJSONP(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
});

function createStubServer($q, $timeout, $log, $filter) {

    var interceptor = {};

    interceptor.getStubData = function (method, url, params) {
        interceptor.url = url;

        switch (url) {
            case 'rpc/authenticate':
                return responseWithTimeout({data: getStubAuthData(), status: 200}, 1000);
        }

        $log.warn("Not found stub for %s %s", method, url);
        return responseWithTimeout({data: null, status: 404}, 1);
    };

    function responseWithTimeout(data, millis) {
        var url = interceptor.url;
        var deferred = $q.defer();
        $timeout(function () {
            if (data.status >= 400) {
                data.data = getErrorMessage(data.status);
                data.statusText = "Internal Server Error";
                $log.error("Error '%s' %o", url, data.data);
            } else {
                // $log.info("Response '%s' %o", url, data.data);
            }
            deferred.resolve([data.status, data.data]);
        }, millis || RandomService.generateRandomDigit(500, 2000));
        return deferred.promise;
    }

    function getErrorMessage(status) {
        switch (status) {
            case 401:
                return 'Session is expired';
            case 503:
                return 'Service Temporarily Unavailable';
            case 408:
                return 'Timeout exception';
            default:
                return 'Something went wrong. Try again later.';
        }
    }

    function getStubAuthData() {
        return { identity: '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8' };
    }

    return interceptor;
}
