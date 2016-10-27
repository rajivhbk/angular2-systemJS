System.register(['angular2/core', 'angular2/common', '../services/validators/emailValidators', 'angular2/router', '../services/users/users.service', 'angular2/http', '../users/user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, emailValidators_1, router_1, users_service_1, http_1, user_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (emailValidators_1_1) {
                emailValidators_1 = emailValidators_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            // import {RouterLink,} from 'angular2/router'
            NewUserComponent = (function () {
                function NewUserComponent(fb, _router, _usersService, _routeParams) {
                    this._router = _router;
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.signupForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, emailValidators_1.EmailValidators.emailValid])],
                        phone: [''],
                        address: fb.group({
                            street: [''],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                NewUserComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        result = this._usersService.updateUser(this.user);
                    }
                    else {
                        result = this._usersService.addUser(this.user);
                    }
                    result.subscribe(function (result) {
                        console.log(result);
                        _this.signupForm.value = {};
                        _this._router.navigate(['Users']);
                    });
                };
                NewUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    console.log(next + "next");
                    console.log(previous + "previous");
                    if (this.signupForm.dirty) {
                        return confirm("Are you sure? \n You have unsaved Changes.");
                    }
                    ;
                };
                ;
                // setTitle(){
                //     var ins = this._router.generate(["NewUser"]);
                //     console.log(ins);
                //     this._router.isRouteActive(ins) ? 
                //     this.title = "Edit User" : this.title = "New User";
                // }
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? 'Edit User' : 'Add User';
                    if (!id)
                        return;
                    this._usersService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        selector: 'newUser',
                        templateUrl: './app/users/newuser.component.html',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_service_1.UsersService, router_1.RouteParams])
                ], NewUserComponent);
                return NewUserComponent;
            })();
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=newuser.component.js.map