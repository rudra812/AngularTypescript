///<reference path="../../typings/index.d.ts"/>
appModule.controller("mainController", function ($scope, $rootScope) {
    new Application.controllers.mainController($scope, $rootScope);
});
var Application;
(function (Application) {
    var controllers;
    (function (controllers) {
        var mainController = (function () {
            function mainController($scope, $rootScope) {
                this.scope = $scope;
                $rootScope.globalScreenName = "My Angualr App";
                this.scope.SearchedValue = "Angular Application";
                this.scope.events = this;
            }
            mainController.prototype.changeName = function (event) {
                console.log(jQuery(event.currentTarget).attr('id'));
                this.scope.SearchedValue = "Angular & Typescript Application";
            };
            return mainController;
        }());
        mainController.$inject = ["$scope", "$rootScope"];
        controllers.mainController = mainController;
    })(controllers = Application.controllers || (Application.controllers = {}));
})(Application || (Application = {}));
