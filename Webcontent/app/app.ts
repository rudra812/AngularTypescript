///<reference path="../typings/tsd.d.ts"/>
class Configuration{
    static $inject = ['$stateProvider', '$urlRouterProvider'];
    constructor(private $stateProvider:ng.ui.IStateProvider, private $urlRouterProvider:ng.ui.IUrlRouterProvider){
        this.init();
    }
    private init(){
         this.$urlRouterProvider.otherwise('/');
         this.$stateProvider.state("/",Configuration.defaultState());
        
    }
    private static defaultState():ng.ui.IState{
         return {
            url: "/",
            template: ['<div>',
                        '<h1 ng-bind="globalScreenName"></h1>',
                        '<h3 ng-bind="SearchedValue" id="serachedValue" ng-click="events.changeName($event);"></h3>',        
                    '</div>'].join("") ,
            controller:"mainController"
        }
    }
}



let appModule = angular.module("myApp",['ui.router'])
.config(($stateProvider, $urlRouterProvider)=>{
    return new Configuration($stateProvider, $urlRouterProvider);
});
