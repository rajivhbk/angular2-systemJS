System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/users/users.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                }
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    var index = this._users.indexOf(user);
                    if (confirm("Are you sure you want to delete " + user.name + " ?")) {
                        this._users.splice(index, 1);
                        this._userService.deleteUser(user.id)
                            .subscribe(function (res) { return console.log(res); }, function (error) {
                            alert("could not delete user!");
                            _this._users.splice(index, 0, user);
                        });
                    }
                };
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsersList()
                        .subscribe(function (users) {
                        console.log(users);
                        _this._users = users;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: './app/users/users.component.html',
                        directives: [router_1.RouterLink],
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            })();
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map