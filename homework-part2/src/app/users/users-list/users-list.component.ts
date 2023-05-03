import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { IUsers } from '../users.component';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input()
  // users: IUsers[] = [];
  users: User[] = [];
  @Input() searchValue: string = '';

  @Output()
  userSelected = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  onUserSelected(user: User): void {
    this.userSelected.emit(user);
  }
}
