var app=angular.module("convertapp",[]);
app.controller("convertctrl",function ($scope,$http) {
    $scope.convertg = function () {
        var gen=$scope.F;

        var words = $http.get("http://localhost:8080/RESTExample/restexample/ftocservice/"+gen)
        words.success(function (data) {
            console.log(data);

            $scope.convertcon={"Grams":data.Grams,"pounds":data.pounds,"kgs":data.kgs};

        });
    }
});
