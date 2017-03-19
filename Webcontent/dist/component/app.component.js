///<reference path="../../typings/index.d.ts"/>
var app;
(function (app) {
    var Component;
    (function (Component) {
        var sampleController = (function () {
            function sampleController() {
                this.textBinding = '';
            }
            return sampleController;
        }());
        Component.sampleController = sampleController;
        var sampleComponent = (function () {
            function sampleComponent() {
                this.bindings = {
                    textBinding: "@"
                };
                this.controller = sampleController;
                this.controllerAs = "$ctrl";
                this.templateUrl = "../app/partials/sample-component.html";
            }
            return sampleComponent;
        }());
        Component.sampleComponent = sampleComponent;
    })(Component = app.Component || (app.Component = {}));
})(app || (app = {}));
appModule.component('sampleComponent', new app.Component.sampleComponent());
