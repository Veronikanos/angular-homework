import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

// export interface IUsers {
//   id: number;
//   firstname: string;
//   lastname: string;
//   email: string;
//   phone: string;
//   selected: boolean;
// }

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})


export class UsersComponent implements OnInit{
  users: User[] = [];
  isAnyChecked = false;
  searchValue: string = '';


	// private user: User = {
	// 		"name": "Veronika T",
	// 		"username": "Bret",
	// 		"email": "Sincere@april.biz",
	// 		"address": {
	// 			"street": "Kulas Light",
	// 			"suite": "Apt. 556",
	// 			"city": "Gwenborough",
	// 			"zipcode": "92998-3874",
	// 			"geo": {
	// 				"lat": "-37.3159",
	// 				"lng": "81.1496"
	// 			}
	// 		},
	// 		"phone": "1-770-736-8031 x56442",
	// 		"website": "hildegard.org",
	// 		"company": {
	// 			"name": "Romaguera-Crona",
	// 			"catchPhrase": "Multi-layered client-server neural-net",
	// 			"bs": "harness real-time e-markets"
	// 		}
	// 	};
	

  constructor(private userService: JSONPlaceholderService) {}

  ngOnInit(): void {
    this.onGetUsers();
		// this.onCreateUsers()
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
				console.log(response);
			this.users = response},
      (error: any) => console.log(error)
    );
  }

  // onCreateUsers(): void {
  //   this.userService.createUser(this.user).subscribe(
  //     (response) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log('Creating NEW USER!')
  //   );
  // }


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
