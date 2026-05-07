import { inject, Injectable } from '@angular/core';
import { UserStore } from '../../store/user/user-store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userStore = inject(UserStore);
  private readonly router = inject(Router);

  register(): void {}

  login(email: string, _password: string): void {
    // MOCK IMPLEMENTATION
    this.userStore.setUser({
      id: '123456',
      username: 'test-user',
      email,
    });
    this.router.navigate(['home']);
  }

  logout(): void {
    this.userStore.resetUserState();
    this.router.navigate(['login']);
  }
}
