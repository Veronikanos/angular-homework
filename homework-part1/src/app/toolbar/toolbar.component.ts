import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() selectAll = new EventEmitter<void>();
  @Input() isAnyChecked: boolean = true;
  @Output() deleteSelected = new EventEmitter<void>();

  buttonClick(): void {
    this.selectAll.emit();
  }

  onDelete(): void {
    this.deleteSelected.emit();
  }
}
