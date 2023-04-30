import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

interface IUsers {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users: IUsers[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.users.push({
        id: i,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
      });
    }
  }
}
