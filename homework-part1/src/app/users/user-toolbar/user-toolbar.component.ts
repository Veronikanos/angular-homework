import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.css'],
})
export class UserToolbarComponent {
  @Output() selectAllClicked = new EventEmitter<void>();
  @Output() deleteSelectedClicked = new EventEmitter<void>();

  selectAll() {
    this.selectAllClicked.emit();
  }

  deleteSelected() {
    this.deleteSelectedClicked.emit();
  }
}
