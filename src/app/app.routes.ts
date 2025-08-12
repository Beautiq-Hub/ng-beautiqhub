import { Routes } from '@angular/router';
import app from '../server';

const appNamePrefix = 'Beautiq Hub - ';

export const routes: Routes = [
  {
    path: '',
    title: appNamePrefix.concat('Homepage'),
    loadComponent: () =>
      import('../app/features/landpage/landpage.component').then(
        (c) => c.LandpageComponent
      ),
  },
  {
    path: 'dashboard',
    title: appNamePrefix.concat('Dashboard'),
    loadComponent: () =>
      import('../app/features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
