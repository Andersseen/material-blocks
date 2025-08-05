import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { getHighlightOptions } from '@shared/highlight.config';
import routes from './routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideClientHydration(withEventReplay()),
    provideHighlightOptions(getHighlightOptions()),
  ],
};
export default appConfig;
