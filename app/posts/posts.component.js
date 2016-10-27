System.register(['angular2/core', 'angular2/http', '../services/posts/posts.service', '../services/users/users.service', '../common/loaderComponent/loader.component', '../common/paginationComponent/pagination.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, posts_service_1, users_service_1, loader_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (loader_component_1_1) {
                loader_component_1 = loader_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                // _comments = {comments:{}};
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this._postsLoading = false;
                    this._posts = [];
                    this._pagedPosts = [];
                    this._users = [];
                    this._post = { comments: [] };
                    this.pageSize = 10;
                }
                PostsComponent.prototype.getComments = function (id) {
                    var _this = this;
                    this._postsService.getComments(id)
                        .subscribe(function (comments) {
                        _this._post.comments = comments;
                        _this._commentsLoading = true;
                        console.log(comments);
                    });
                };
                PostsComponent.prototype.getPost = function (post) {
                    this._post = post;
                    this._post.comments = [];
                    this._commentsLoading = false;
                    this.getComments(post.id);
                };
                PostsComponent.prototype.filterPosts = function (filter) {
                    this._post = { comments: [] };
                    console.log(filter);
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this._postsService.getPosts(filter)
                        .subscribe(function (posts) {
                        console.log(posts);
                        _this._postsLoading = true;
                        _this._posts = posts;
                        _this._pagedPosts = _this.getPostsInPage(1);
                    });
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    console.log(page);
                    this._pagedPosts = this.getPostsInPage(page);
                };
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
                PostsComponent.prototype.getPostsInPage = function (page) {
                    var result = [];
                    var startingIndex = (page - 1) * this.pageSize;
                    var endIndex = Math.min(startingIndex + this.pageSize, this._posts.length);
                    for (var i = startingIndex; i < endIndex; i++)
                        result.push(this._posts[i]);
                    return result;
                };
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsersList()
                        .subscribe(function (users) {
                        console.log(users);
                        _this._users = users;
                    });
                    this.loadPosts();
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'selector',
                        templateUrl: './app/posts/posts.component.html',
                        directives: [loader_component_1.LoaderComponent, pagination_component_1.PaginationComponent],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        styles: ["\n        .posts li {\t\n            cursor: default;\t\n        }\n        .posts li:hover {\t\n            background: #ecf0f1;\t\n        }\t\n        .list-\u00AD\u2010group-\u00AD\u2010item.active,\n        .list-\u00AD\u2010group-\u00AD\u2010item.active:hover,\n        .list-\u00AD\u2010group-\u00AD\u2010item.active:focus {\t\n            background-\u00AD\u2010color:\t#ecf0f1;\n            border-\u00AD\u2010color:\t#ecf0f1;\n            color: #2c3e50;\n        }\n        .thumbnail{\n            border-radius: 100%;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            })();
            exports_1("PostsComponent", PostsComponent); //end of class
        }
    }
});
//# sourceMappingURL=posts.component.js.map