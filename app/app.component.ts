import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';

import {UsersComponent} from "./users/users.component";
import {NewUserComponent} from './users/newuser.component'
import {PostsComponent} from './posts/posts.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component'

@RouteConfig([
    { path:'/', name: 'Home', component: HomeComponent ,useAsDefault: true},
    { path:'/users', name:'Users', component: UsersComponent},
    { path: '/users/new', name: 'NewUser', component: NewUserComponent},
    { path: '/users/:id', name: 'EditUser', component: NewUserComponent},
    { path: '/users/notfound', name:'NotFound', component: NotFoundComponent },
    { path:'/posts', name: 'Posts', component: PostsComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent,RouterLink, RouterOutlet]
})
export class AppComponent {
}