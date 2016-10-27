import { Component, Input, Output, EventEmitter, OnChanges } from 'angular2/core';

@Component({
    selector: 'pagination',
    template: `
        <nav *ngIf="items.length > pageSize" aria-label="Page navigation">
            <ul class="pagination">
                <li [class.disabled]="currentPage == 1"
                    (click)="previousPage()">
                    <a aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span></a>
                </li>
                <li *ngFor="#page of pages"
                    (click)="changePage(page)"
                    [class.active]="page == currentPage">
                    <a>{{page}}</a>
                </li>
                <li [class.disabled]="currentPage == pages.length"
                    (click)="nextPage()">
                    <a aria-label="Next">
                    <span aria-hidden="true">&raquo;</span></a>
                </li>
            </ul>
        </nav>
    `,
    styles:[`
    ul.pagination li {
    cursor: pointer;
}
    `]
})
export class PaginationComponent implements OnChanges {
    @Input() items = [];
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter;
    pages :any[];
    currentPage;

    constructor() { }

    ngOnChanges() {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.items.length/this.pageSize);
        this.pages = [];
        for(var i=1; i <= pagesCount; i++ ){
            this.pages.push(i);
        };
     };

     changePage(page){
         console.log(page);
         this.currentPage = page;
         this.pageChanged.emit(this.currentPage);
     }

     previousPage(){
         if(this.currentPage == 1){
             return;
         }
         this.currentPage--;
         this.pageChanged.emit(this.currentPage);
     }

     nextPage(){
         if(this.currentPage == this.pages.length)
         return;

         this.currentPage++;
         this.pageChanged.emit(this.currentPage);
     }
}