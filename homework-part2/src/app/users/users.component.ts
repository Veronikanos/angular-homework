import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})


export class UsersComponent implements OnInit{
  users: User[] = [];
  isAnyChecked = false;
  searchValue: string = '';


  constructor(private userService: JSONPlaceholderService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
				// console.log(response);
			this.users = response},
      (error: any) => console.log(error)
    );
  }

  onCreateUsers(user: User): void {
    this.userService.createUser(user).subscribe(
      (response) => {console.log(response)
				this.users.push(response);},
      (error: any) => console.log(error),
      () => console.log('Creating NEW USER!')
    );
  }


  onDeleteUser(index: number): void {
    this.userService.deleteUser(index).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error)
    );
  }

  selectAll(): void {
    this.users.forEach((user) => (user.selected = true));
    this.updateDeleteButtonState();
  }

  updateDeleteButtonState(): void {
    this.isAnyChecked = this.users.some((user) => user.selected === true);
  }

  deleteSelected(): void {
		const allSelectedUsers: User[] = this.users.filter((user: User) => user.selected);
		allSelectedUsers.forEach(user => {
			if (user.id !== undefined) {
				this.onDeleteUser(user.id);
			}
		});

		// render list of users after deleting requests
		this.users = this.users.filter((user) => !user.selected);
    this.updateDeleteButtonState();
  }

  saveSearchInput(filtered: string): void {
    this.searchValue = filtered;
  }
}
