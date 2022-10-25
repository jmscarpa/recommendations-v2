import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public isLoggedIn(): boolean {
    return !!localStorage['user'];
  }

  public get currentUser(): User {
    return JSON.parse(localStorage['user']);
  }

  public login(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('');
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
