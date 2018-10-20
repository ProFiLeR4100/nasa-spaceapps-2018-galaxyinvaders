app.directive('render', RenderDirectiveController);

function RenderDirectiveController() {
    return {
        restrict: 'E',
        scope: {
            tag: "=",
            tagClass: "=",
            model: "=model"
        },
        controller: ['$scope', '$element', '$compile', function ($scope, $element, $compile) {
            if (!$scope.tag) return;

            var el = $compile(("<{0} class=\"{1}\" model=\"model\"></{0}>").format(
                $scope.tag,
                !!$scope.tagClass ? $scope.tagClass : ""))($scope);

            $element.replaceWith(el);//.empty().append(el);//// //
        }]
    };
}