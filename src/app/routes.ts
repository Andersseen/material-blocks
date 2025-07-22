import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@components/home'),
    title: 'UI Blocks - Copy-Paste Ready Components',
  },
  //   {
  //     path: "sections",
  //     loadComponent: () => import("@components/sections"),
  //     title: "Sections - UI Blocks",
  //   },
  //   {
  //     path: "docs",
  //     loadComponent: () => import("@components/docs"),
  //     title: "Documentation - UI Blocks",
  //   },
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
