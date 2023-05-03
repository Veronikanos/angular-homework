import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class JSONPlaceholderService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    let url: string = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get<User[]>(url);
  }

  // getUser(): Observable<User> {
  // 	return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/1`),
  // }
}
