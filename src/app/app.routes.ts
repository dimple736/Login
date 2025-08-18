// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login'; 
import { DashboardComponent } from './dashboard/dashboard';
import { UserListComponent } from './user-list/user-list';
import { CreateUserComponent } from './create-user/create-user';
import { CreateCouponComponent } from './create-coupon/create-coupon';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'userlist',
        pathMatch: 'full'
      },
      {
        path: 'userlist',
        loadComponent: () => import('./user-list/user-list').then(m => UserListComponent)
      },
      {
        path: 'createuser',
        loadComponent: () => import('./create-user/create-user').then(m => CreateUserComponent)
      },
      {
      path: 'create-coupon',
      loadComponent: () => import('./create-coupon/create-coupon').then(m => CreateCouponComponent)
      }
    ]
  }
];
