import { Routes } from '@angular/router';
import routesConfig from '@data/routes.json';

const COMPONENT_MAP: Record<string, () => Promise<any>> = {
  home: () => import('@components/home'),
  sections: () => import('@components/sections'),
  docs: () => import('@components/docs'),
};

const getComponentLoader = (code: string) => {
  const loader = COMPONENT_MAP[code];
  if (!loader) {
    throw new Error(`No component loader found for path: ${code}`);
  }
  return loader;
};

const routes: Routes = [
  ...routesConfig.routes.map((route) => ({
    path: route.path,
    loadComponent: getComponentLoader(route.code),
    title: route.title,
  })),
  {
    path: '**',
    redirectTo: '',
  },
];

export default routes;
