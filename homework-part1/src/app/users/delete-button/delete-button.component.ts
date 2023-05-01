import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
  // @Output() deleteSelected = new EventEmitter<void>();
  // onDeleteClick(): void {
  //   this.deleteSelected.emit();
  // }
  // anySelected(): boolean {
  //   // check if any user is selected
  //   return this.users.some((user) => user.selected);
  // }
}
