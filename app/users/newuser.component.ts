import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { EmailValidators } from '../services/validators/emailValidators';
import { Router, CanDeactivate, RouteParams } from 'angular2/router';
import { UsersService } from '../services/users/users.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { User } from '../users/user'
// import {RouterLink,} from 'angular2/router'

@Component({
    selector: 'newUser',
    templateUrl: './app/users/newuser.component.html',
    providers: [UsersService, HTTP_PROVIDERS]
})
export class NewUserComponent implements OnInit, CanDeactivate {
    signupForm: ControlGroup;
    title: string;
    user = new User();
    constructor(fb: FormBuilder, 
    private _router: Router,
    private _usersService: UsersService,
    private _routeParams: RouteParams
    ) {
        this.signupForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidators.emailValid])],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    
    save(){
        var result;

        if(this.user.id){
            result = this._usersService.updateUser(this.user);
        }else{
            result = this._usersService.addUser(this.user);
        }
         result.subscribe( result =>{
             console.log(result);
             this.signupForm.value = {};
             this._router.navigate(['Users']);
         })
     }

    routerCanDeactivate(next, previous) {
        console.log(next + "next");
        console.log(previous + "previous");
        if (this.signupForm.dirty) {
            return confirm("Are you sure? \n You have unsaved Changes.");
        };
    };

    // setTitle(){
    //     var ins = this._router.generate(["NewUser"]);
    //     console.log(ins);
    //     this._router.isRouteActive(ins) ? 
    //     this.title = "Edit User" : this.title = "New User";
    // }



    ngOnInit() {
        var id = this._routeParams.get("id");
        this.title = id ? 'Edit User' : 'Add User';

        if(!id)
            return;
        this._usersService.getUser(id)
        .subscribe(
            user => this.user = user,
            response => {
                if(response.status == 404){
                    this._router.navigate(['NotFound']);
                }
            });
        
     }
}