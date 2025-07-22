import { Routes } from '@angular/router';
import routesConfig from '@data/routes.json';

const data = routesConfig.routes;

const routes: Routes = [
  {
    path: data[0].path,
    loadComponent: () => import('@components/home'),
    title: data[0].title,
  },
  {
    path: data[1].path,
    loadComponent: () => import('@components/sections'),
    title: data[1].title,
  },
  {
    path: data[2].path,
    loadComponent: () => import('@components/docs'),
    title: data[2].title,
  },
  // {
  //   path: "login",
  //   loadComponent: () =>
  //     import("@components/auth/login.component").then((m) => m.LoginComponent),
  //   title: "Login - UI Blocks",
  // },
  // {
  //   path: "admin",
  //   loadComponent: () =>
  //     import("@components/admin/admin.component").then((m) => m.AdminComponent),
  //   canActivate: [authGuard],
  //   title: "Admin - UI Blocks",
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

export default routes;
