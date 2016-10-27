import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'notfound',
    template: '<h1 class="alert-warning">404! Page Not Found.</h1>'
})
export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}