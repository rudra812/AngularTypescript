///<reference path="../typings/tsd.d.ts"/>
let appModule = angular.module("myApp",['ui.router']);
appModule.controller("mainController",($scope,$rootScope)=>{
    new Application.controllers.mainController($scope,$rootScope);
});
namespace Application.controllers{
    export interface IControllerScope  extends ng.IScope {
        SearchedValue: string;                  
    }
    export class mainController{       
        name:string;
        scope:any;
        static $inject = ["$scope","$rootScope"];
        constructor($scope:IControllerScope,$rootScope:ng.IRootScopeService) {                       
           this.scope = $scope;
           $rootScope.globalScreenName = "My Angualr App"
           this.scope.SearchedValue = "Rudra";
           this.scope.events  = this;         
        }
        changeName(event:BaseJQueryEventObject){
            console.log(jQuery(event.currentTarget).attr('id'));
            this.scope.SearchedValue = "Pupu";
        }
    }
}