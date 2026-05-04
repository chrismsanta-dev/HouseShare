import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserStore } from '../../store/user/user-store';

export const AuthGuard: CanActivateFn = () => {
  const userStore = inject(UserStore);
  const router = inject(Router);

  return userStore.user() ? true : router.createUrlTree(['/login']);
};
