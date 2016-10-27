import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()  
export class PostsService{

    private _postsUrl = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){}

    getPosts(filter?){
        var url = this._postsUrl;
        if(filter && filter.userId)
        url += '?userId='+filter.userId;
        return this._http.get(url)
            .map(posts => posts.json());
    }

    createPost(post){
        return this._http.post(this._postsUrl, JSON.stringify(post))
            .map(response => response.json());
    }

    getComments(id){
        return this._http.get(this.getUrl(id)+'/comments')
            .map(comments => comments.json());
    }

    // getPost(id){
    //     return this._http.get(this.getUrl(id))
    //         .map( post => post.json());
    // }

    getUrl(id){
        return this._postsUrl +'/'+ id;
    }
}