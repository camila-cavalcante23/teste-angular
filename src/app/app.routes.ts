import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./hello/hello.component').then(m => m.HelloComponent)
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./post-details/post-details.component').then(m => m.PostDetailsComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./post-create/post-create.component').then(m => m.PostCreateComponent)
  }
  
];
