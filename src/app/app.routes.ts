import { Routes } from '@angular/router';
import LoginComponent from './public/login/login.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./private/dashboard/dashboard.component'),
    children: [
      {
        path: 'list',
        title: 'Listado',
        loadComponent: () => import('./private/dashboard/items-list/items-list.component'),
        pathMatch:'full'
      },
      {
        path: 'detail',
        title: 'Detalle',
        loadComponent: () => import('./private/dashboard/item-detail/item-detail.component'),
        pathMatch:'full'
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }



];
