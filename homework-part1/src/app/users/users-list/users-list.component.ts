import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from '../users.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input()
  users: IUsers[] = [];

  constructor() {}

  ngOnInit(): void {}

	selectAll(): void {
    this.users.forEach((user) => (user.selected = true));
  }
}
