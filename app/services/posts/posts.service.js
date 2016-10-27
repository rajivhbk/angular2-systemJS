System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var PostsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PostsService = (function () {
                function PostsService(_http) {
                    this._http = _http;
                    this._postsUrl = "https://jsonplaceholder.typicode.com/posts";
                }
                PostsService.prototype.getPosts = function (filter) {
                    var url = this._postsUrl;
                    if (filter && filter.userId)
                        url += '?userId=' + filter.userId;
                    return this._http.get(url)
                        .map(function (posts) { return posts.json(); });
                };
                PostsService.prototype.createPost = function (post) {
                    return this._http.post(this._postsUrl, JSON.stringify(post))
                        .map(function (response) { return response.json(); });
                };
                PostsService.prototype.getComments = function (id) {
                    return this._http.get(this.getUrl(id) + '/comments')
                        .map(function (comments) { return comments.json(); });
                };
                // getPost(id){
                //     return this._http.get(this.getUrl(id))
                //         .map( post => post.json());
                // }
                PostsService.prototype.getUrl = function (id) {
                    return this._postsUrl + '/' + id;
                };
                PostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostsService);
                return PostsService;
            })();
            exports_1("PostsService", PostsService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map