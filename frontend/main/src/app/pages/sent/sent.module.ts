import { SentComponent } from './sent.component';
import { Routes } from '@angular/router';


export const SentRoutes: Routes = [
  {
    path: '',
    component: SentComponent,
    data: {
      title: 'sent',
      urls: [
        { title: 'sent', url: '/sent' },
        { title: 'sent' },
      ],
    },
  },
];

