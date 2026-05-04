import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/register/register.component').then((c) => c.RegisterComponent),
  },
];
