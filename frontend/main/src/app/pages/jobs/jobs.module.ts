import { Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';



export const JobsRoutes: Routes = [
  {
    path: '',
    component: JobsComponent,
    data: {
      title: 'jobs',
      urls: [
        { title: 'jobs', url: '/jobs' },
        { title: 'jobs' },
      ],
    },
  },
];
