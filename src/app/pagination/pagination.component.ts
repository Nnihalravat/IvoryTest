import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalPages!: number ;
  @Input() currentPage!: number ;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onPageChange(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
}
