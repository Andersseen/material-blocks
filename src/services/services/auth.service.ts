import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'ui-blocks-auth';
  
  private _isAuthenticated = signal<boolean>(false);
  private _currentUser = signal<User | null>(null);
  
  readonly isAuthenticated = this._isAuthenticated.asReadonly();
  readonly currentUser = this._currentUser.asReadonly();
  
  constructor(private router: Router) {
    this.checkStoredAuth();
  }
  
  private checkStoredAuth(): void {
    const storedAuth = localStorage.getItem(this.STORAGE_KEY);
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      this._isAuthenticated.set(true);
      this._currentUser.set(authData.user);
    }
  }
  
  login(username: string, password: string): boolean {
    // Demo credentials
    if (username === 'admin' && password === 'admin') {
      const user: User = { username: 'admin', role: 'administrator' };
      this._isAuthenticated.set(true);
      this._currentUser.set(user);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ user }));
      return true;
    }
    return false;
  }
  
  logout(): void {
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
    this.router.navigate(['/']);
  }
}