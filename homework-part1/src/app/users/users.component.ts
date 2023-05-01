import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export interface IUsers {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  selected: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: IUsers[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.users.push({
        id: i,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        selected: false,
      });
    }
  }

  buttonClick() {
    this.users.forEach((user) => (user.selected = true));
  }
}
