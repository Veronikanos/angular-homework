import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() selectAll = new EventEmitter<void>();
  @Input() isAnyChecked: boolean = true;

  buttonClick(): void {
    this.selectAll.emit();
  }
}
