import { Routes } from '@angular/router';
import routesConfig from '@data/routes.json';
import examplesRoutes from '@examples/routes';

const COMPONENT_MAP: Record<string, () => Promise<any>> = {
  home: () => import('@app/home/routes'),
  sections: () => import('@app/sections/routes'),
  docs: () => import('@app/docs/routes'),
};

const getComponentLoader = (code: string) => {
  const loader = COMPONENT_MAP[code];
  if (!loader) {
    throw new Error(`No component loader found for path: ${code}`);
  }
  return loader;
};

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/app'),
    title: routesConfig.metadata.projectName,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      ...routesConfig.routes.map((route) => ({
        path: route.path,
        loadChildren: getComponentLoader(route.code),
        title: route.title,
      })),
    ],
  },
  {
    path: 'examples',
    children: [...examplesRoutes],
    title: 'Block Example',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export default routes;
