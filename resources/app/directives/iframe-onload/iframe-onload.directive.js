app.directive('iframeOnload', IframeOnloadController);

function IframeOnloadController() {
    return {
        scope: {
            callBack: '&iframeOnload'
        },
        link: function(scope, element, attrs){
            element.on('load', function(){
                return scope.callBack();
            })
        }
    };
}