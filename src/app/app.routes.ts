import { Routes } from '@angular/router';
// import LoginComponent from './public/login/login.component';

export const routes: Routes = [

  {
    path:'',
    // component: LoginComponent,
    loadComponent:() => import('./public/login/login.component'),
    pathMatch:'full'
  },



];
