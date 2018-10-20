app.factory("RestService", ["$http", "$log", "$q", RestService]);

var debug = false;
function RestService($http, $log, $q) {
    var factory = {};

    factory.httpRequest = function(url, method, data){
        var startTime = new Date().getTime();
        var debugPrefix = '/stub-rest-url';
        return $http({
            method: method,
            url: (url.indexOf('.json') < 0 ? (debug ? debugPrefix : '') : '') + url,
            data: data
        }).then(function (response) {
            logResponse(url, data, response, startTime);
            return response;
        })
    };
    
    function logResponse(url, data, response, startTime) {
        try {
            var format = "[%1$s]: ";
            if (data) {
                format += "data:%2$o, ";
            }
            format += "response:%3$o, time: %4$dms";
            $log.log(format, url, data, response.data, (new Date().getTime() - startTime));
        } catch (ignore) {}
    }

    return factory;
}