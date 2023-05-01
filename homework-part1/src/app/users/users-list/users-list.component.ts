import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUsers } from '../users.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input()
  users: IUsers[] = [];
  @Input() searchValue: string = '';

  @Output()
  userSelected = new EventEmitter<IUsers>();

  constructor() {}

  ngOnInit(): void {}

  onUserSelected(user: IUsers): void {
    this.userSelected.emit(user);
  }
}
