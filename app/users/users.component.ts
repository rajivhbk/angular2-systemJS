import { Component, OnInit } from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';

import {UsersService} from '../services/users/users.service';

@Component({
    selector: 'users',
    templateUrl: './app/users/users.component.html',
    directives: [RouterLink],
    providers: [UsersService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit {
    private _users;
    constructor(private _userService: UsersService) { }

    deleteUser(user){
        var index = this._users.indexOf(user);
        if(confirm("Are you sure you want to delete "+user.name+" ?")){
            this._users.splice(index,1);

            this._userService.deleteUser(user.id)
                .subscribe(res => console.log(res),
                error => {
                    alert("could not delete user!");
                    this._users.splice(index,0,user);
                });
        }
        
    }

    ngOnInit() {
        this._userService.getUsersList()
        .subscribe(users => {
            console.log(users);
            this._users = users;
        });

        
     }
}