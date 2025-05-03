import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { SentComponent } from './pages/sent/sent.component';
export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'jobs',
        loadChildren: () =>
          import('./pages/jobs/jobs.module').then(
            (m) => m.JobsRoutes
          ),
      },

      {
        path: 'apply',
        loadChildren: () =>
          import('./pages/apply/apply.module').then(
            (m) => m.ApplyRoutes
          ),
      },

      {
        path: 'sent',
        loadChildren: () =>
          import('./pages/sent/sent.module').then(
            (m) => m.SentRoutes
          ),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },




];
