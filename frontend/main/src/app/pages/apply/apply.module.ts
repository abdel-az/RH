import { ApplyComponent } from './apply.component';
import { Routes } from '@angular/router';


export const ApplyRoutes: Routes = [
  {
    path: '',
    component: ApplyComponent,
    data: {
      title: 'apply',
      urls: [
        { title: 'apply', url: '/apply' },
        { title: 'apply' },
      ],
    },
  },
];

