import { Routes } from '@angular/router';

const blogRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '1', loadComponent: () => import('@examples/blog/blog-1') },
      { path: '2', loadComponent: () => import('@examples/blog/blog-2') },
      { path: '3', loadComponent: () => import('@examples/blog/blog-3') },
      { path: '4', loadComponent: () => import('@examples/blog/blog-4') },
    ],
  },
];
export default blogRoutes;
