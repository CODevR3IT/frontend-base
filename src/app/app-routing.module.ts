import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'main',
    canActivate: [GuardService],
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'ejemplo',
    canActivate: [GuardService],
    loadChildren: () => import('./pages/ejemplo/ejemplo.module').then(m => m.EjemploModule),
  },
  {
    path: 'ejemplo',
    canActivate: [GuardService],
    loadChildren: () => import('./pages/ejemplo/ejemplo.module').then(m => m.EjemploModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/not-found/not-found.module').then(m => m.NotFoundModule),
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
