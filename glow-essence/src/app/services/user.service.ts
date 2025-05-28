import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  email: string;
  password: string;
  nome: string;
  cpf: number;
  endereco: string;
  cep: number;
  cidade: string;
  
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}?email=${email}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user);
  }
}
