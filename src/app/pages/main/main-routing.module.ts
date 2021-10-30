import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    loadChildren: () => import('../../pages/error/not-found/not-found.module').then(m => m.NotFoundModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
