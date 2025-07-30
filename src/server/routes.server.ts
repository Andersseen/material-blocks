import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },

  {
    path: 'sections/heroes/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
    },
  },

  {
    path: 'sections/features/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
    },
  },
  {
    path: 'sections/pricing/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
    },
  },
  {
    path: 'sections/testimonials/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
    },
  },

  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
