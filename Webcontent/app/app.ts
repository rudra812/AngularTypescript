///<reference path="../typings/index.d.ts"/>

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
            templateUrl:'./app/partials/home.html',
            controller:"mainController"
        }
    }
}


let appModule = angular.module("myApp",['ui.router'])
.config(($stateProvider, $urlRouterProvider)=>{
    return new Configuration($stateProvider, $urlRouterProvider);
});
