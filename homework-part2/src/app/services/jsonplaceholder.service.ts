import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { tap } from 'rxjs/operators'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class JSONPlaceholderService {
  private apiUrl = `https://jsonplaceholder.typicode.com`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
			map(users => users.map(user => ({
				...user,
				checked: false,
			}))));
  }

  // getUser(): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/users/1`);
  // }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
