app.factory("ConfigService", ["RestService", "$q", ConfigService]);

function ConfigService(RestService, $q) {
    var factory = {};

    factory.getConfig = function () {
        var defered = $q.defer();
        RestService.httpRequest("./config.json", "GET").then(function (response) {
            // angular.forEach(response.data["donations"], function (url, key) {
            //     response.data["donations"][key] = url.replace(/http:\/\/www.donationalerts.ru/, "");
            // });
            //
            //
            //
            // response.data["topDonations"] = response.data["topDonations"].replace(/http:\/\/www.donationalerts.ru/, "");
            // response.data["streamDonations"] = response.data["streamDonations"].replace(/http:\/\/www.donationalerts.ru/, "");

            defered.resolve(response);
        },function (response) {
            defered.reject(response);
        });
        return defered.promise;
    };

    return factory;
}