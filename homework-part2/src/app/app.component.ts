import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'homework-part2';

  constructor(private userService: JSONPlaceholderService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Getting DONE!')
    );
  }
}
