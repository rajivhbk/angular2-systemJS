import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Injectable} from 'angular2/core';

@Injectable()
export class UsersService{
    private _url = "http://jsonplaceholder.typicode.com/users"

    constructor(private _http: Http){}

    getUsersList(){
        return this._http.get(this._url)
        .map(users => {
            console.log(users);
            return users.json();
        });
    };

    addUser(user){
        return this._http.post(this._url,JSON.stringify(user))
        .map( result => {
            console.log(result);
            return result.json();
        });
    };

    updateUser(user){
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(resp => resp.json());
    }

    getUser(id){
        return this._http.get(this.getUserUrl(id))
        .map(user => user.json());
    }

    deleteUser(id){
        return this._http.delete(this.getUserUrl(id))
        .map( result => result.json());
    }

    private getUserUrl(id){
        return this._url+'/'+id;
    }
}