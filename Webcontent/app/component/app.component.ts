///<reference path="../../typings/index.d.ts"/>

namespace app.Component{
    export class sampleController implements ng.IComponentController {
        public textBinding:string;
        constructor() {
            this.textBinding = '';        
        }
    }
    export class sampleComponent implements ng.IComponentOptions{
        bindings:any;
        controller:any;
        templateUrl:string;
        controllerAs:string;
        constructor(){
            this.bindings={
                textBinding:"@"                
            };
            this.controller = sampleController;
            this.controllerAs = "$ctrl";
            this.templateUrl = "../app/partials/sample-component.html";
        }
    }
}
appModule.component('sampleComponent',new app.Component.sampleComponent());

