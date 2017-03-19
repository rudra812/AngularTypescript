///<reference path="../typings/index.d.ts"/>
var Configuration = (function () {
    function Configuration($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.init();
    }
    Configuration.prototype.init = function () {
        this.$urlRouterProvider.otherwise('/');
        this.$stateProvider.state("/", Configuration.defaultState());
    };
    Configuration.defaultState = function () {
        return {
            url: "/",
            templateUrl: './app/partials/home.html',
            controller: "mainController"
        };
    };
    return Configuration;
}());
Configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
var appModule = angular.module("myApp", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
    return new Configuration($stateProvider, $urlRouterProvider);
});
