import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'userlist',
        pathMatch: 'full'
      },
      {
        path: 'userlist',
        loadComponent: () => import('./user-list/user-list').then(m => m.UserListComponent)
      },
      {
        path: 'createuser',
        loadComponent: () => import('./create-user/create-user').then(m => m.CreateUserComponent)
      },
      {
        path: 'create-coupon',
        loadComponent: () => import('./create-coupon/create-coupon').then(m => m.CreateCouponComponent)
      },
      {
        path: 'coupon-list',  
        loadComponent: () => import('./coupon-list/coupon-list').then(m => m.CouponListComponent)
      },
      {
        path: 'video-list',  
        loadComponent: () => import('./video-list/video-list').then(m => m.VideoListComponent)
      },
       {
        path: 'video-play/:id',   
        loadComponent: () => import('./video-play/video-play').then(m => m.VideoPlayComponent)
   } ]
  }
];
