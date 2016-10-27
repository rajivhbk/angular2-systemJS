System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoaderComponent = (function () {
                function LoaderComponent() {
                    this.loading = false;
                }
                LoaderComponent.prototype.ngOnInit = function () { };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LoaderComponent.prototype, "loading", void 0);
                LoaderComponent = __decorate([
                    core_1.Component({
                        selector: 'loader',
                        template: '<span *ngIf="!loading" class="glyphicon glyphicon-refresh glyphicon-refresh-animate centered"></span>',
                        styles: ["\n        .glyphicon-refresh-animate {\n            -animation: spin .7s infinite linear;\n            -webkit-animation: spin2 .7s infinite linear;\n            font-size: 2.5em;\n        }\n\n        @-webkit-keyframes spin2 {\n            from { -webkit-transform: rotate(0deg);}\n            to { -webkit-transform: rotate(360deg);}\n        }\n\n        @keyframes spin {\n            from { transform: scale(1) rotate(0deg);}\n            to { transform: scale(1) rotate(360deg);}\n        }\n    "],
                        inputs: ['loading']
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoaderComponent);
                return LoaderComponent;
            })();
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});
//# sourceMappingURL=loader.component.js.map