import { Component, OnInit } from 'angular2/core';
import {HTTP_PROVIDERS} from'angular2/http';
import { PostsService} from '../services/posts/posts.service';
import { UsersService} from '../services/users/users.service';
import {LoaderComponent} from '../common/loaderComponent/loader.component';
import {PaginationComponent} from '../common/paginationComponent/pagination.component';

@Component({
    selector: 'selector',
    templateUrl: './app/posts/posts.component.html',
    directives: [LoaderComponent, PaginationComponent],
    providers: [ PostsService, UsersService,HTTP_PROVIDERS],
    styles: [`
        .posts li {	
            cursor: default;	
        }
        .posts li:hover {	
            background: #ecf0f1;	
        }	
        .list-­‐group-­‐item.active,
        .list-­‐group-­‐item.active:hover,
        .list-­‐group-­‐item.active:focus {	
            background-­‐color:	#ecf0f1;
            border-­‐color:	#ecf0f1;
            color: #2c3e50;
        }
        .thumbnail{
            border-radius: 100%;
        }
    `]
})
export class PostsComponent implements OnInit {
    _postsLoading = false;
    _commentsLoading;
    _posts=[];
    _pagedPosts = [];
    _users = [];
    _post={comments:[]};
    _selectedUser;
    pageSize = 10;
    // _comments = {comments:{}};
    constructor(private _postsService: PostsService, private _usersService: UsersService) { }
    getComments(id){
        this._postsService.getComments(id)
            .subscribe(comments => {
                this._post.comments = comments;
                this._commentsLoading = true;
                console.log(comments);
            });
    }

    getPost(post){
        this._post = post;
        this._post.comments = [];
        this._commentsLoading = false;
        this.getComments(post.id);
    }

    filterPosts(filter){
        this._post = {comments:[]};
        console.log(filter);
        this.loadPosts(filter);
    }

    loadPosts(filter?){
        this._postsService.getPosts(filter)
            .subscribe( posts => {
            console.log(posts);
            this._postsLoading = true;
            this._posts = posts;
            this._pagedPosts = this.getPostsInPage(1);
        });
     }

     onPageChanged(page){
         console.log(page);
         this._pagedPosts = this.getPostsInPage(page);
     }

    //  ngOnInit() {
    //     this.loadUsers();
    //     this.loadPosts();        
	// }
    
    // private loadUsers(){
    //     this._userService.getUsers()
    //         .subscribe(users => this.users = users);
    // }
    
    // private loadPosts(filter?){
    //     this.postsLoading = true; 
	// 	this._postService.getPosts(filter)
	// 		.subscribe(
    //             posts => {
    //                 this.posts = posts;
    //                 this.pagedPosts = this.getPostsInPage(1);
    //             },
    //             null,
    //             () => { this.postsLoading = false; });
    // }
    
    
    
    // select(post){
	// 	this.currentPost = post; 
        
    //     this.commentsLoading = true;
    //     this._postService.getComments(post.id)
	// 		.subscribe(
    //             comments => 
    //                 this.currentPost.comments = comments,
    //             null,
    //             () => this.commentsLoading = false); 
    // } 
    
	
    
    private getPostsInPage(page){
        var result = [];
		var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this._posts.length);

        for (var i = startingIndex; i < endIndex; i++)
            result.push(this._posts[i]);
            
        return result;
    }
   
    ngOnInit() {
        this._usersService.getUsersList()
            .subscribe(users => {
                console.log(users);
                this._users = users;
            });
        this.loadPosts();
     }

     
} //end of class