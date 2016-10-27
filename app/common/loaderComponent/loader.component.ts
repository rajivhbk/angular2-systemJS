import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'loader',
    template: '<span *ngIf="!loading" class="glyphicon glyphicon-refresh glyphicon-refresh-animate centered"></span>',
    styles: [`
        .glyphicon-refresh-animate {
            -animation: spin .7s infinite linear;
            -webkit-animation: spin2 .7s infinite linear;
            font-size: 2.5em;
        }

        @-webkit-keyframes spin2 {
            from { -webkit-transform: rotate(0deg);}
            to { -webkit-transform: rotate(360deg);}
        }

        @keyframes spin {
            from { transform: scale(1) rotate(0deg);}
            to { transform: scale(1) rotate(360deg);}
        }
    `],
    inputs: ['loading']
})
export class LoaderComponent implements OnInit {
    @Input() loading = false;
    
    constructor() { }

    ngOnInit() { }
}