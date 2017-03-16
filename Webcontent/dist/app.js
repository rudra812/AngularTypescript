///<reference path="../typings/tsd.d.ts"/>
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
            template: ['<div>',
                '<h1 ng-bind="globalScreenName"></h1>',
                '<h3 ng-bind="SearchedValue" id="serachedValue" ng-click="events.changeName($event);"></h3>',
                '</div>'].join(""),
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
