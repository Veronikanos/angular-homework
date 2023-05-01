import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() selectAll = new EventEmitter<void>();

  buttonClick(): void {
    this.selectAll.emit();
  }
}
