import { Component, EventEmitter, Output, Input } from '@angular/core';
// import { IUsers } from '../users/users.component';
import { User } from '../interface/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() selectAll = new EventEmitter<void>();
  @Input() isAnyChecked: boolean = true;
  // @Input() users: IUsers[] = [];
  @Input() users: User[] = [];
  @Output() deleteSelected = new EventEmitter<void>();
  @Output() saveSearchInput = new EventEmitter<string>();

  selectAllClick(): void {
    this.selectAll.emit();
  }

  onDelete(): void {
    this.deleteSelected.emit();
  }

  onKeyup(filtered: string): void {
    this.saveSearchInput.emit(filtered);
  }
}
