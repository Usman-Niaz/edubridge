import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./component/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./component/admin/admin.component').then((c) => c.AdminComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./component/about/about.component').then((c) => c.AboutComponent),
  },

];
