import { Routes } from '@angular/router';
import { HomePageComponent } from '@jet/components/home-page/home-page.component';
import { Calculation3DPrintPageComponent } from './components/calculation-3-d-print-page/calculation-3-d-print-page.component';

export const routes: Routes = [
  { component: HomePageComponent, path: '' },
  { component: Calculation3DPrintPageComponent, path: 'calculate' },
  { loadChildren: async () => (await import('./lazy.routes')).lazyRoutes, path: '' },
  {
    data: { case: 'not-found' },
    loadComponent: async () =>
      (await import('@jet/components/message-page/message-page.component')).MessagePageComponent,
    path: '**',
  },
];
