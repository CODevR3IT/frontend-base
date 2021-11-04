import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { PaginadoComponent } from './paginado/paginado.component';
import { SubmenuComponent } from './submenu/submenu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduccion',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EjemploComponent,
    children: [
      {
        path:'introduccion', component: IntroduccionComponent
      },
      {
        path:'formulario', component: FormularioComponent
      },
      {
        path:'paginado', component: PaginadoComponent
      },
      {
        path: 'submenu/item1', component: SubmenuComponent,
      },
      {
        path: 'submenu/item2', component: SubmenuComponent,
      },
      {
        path: 'submenu/item3', component: SubmenuComponent,
      }
    ]
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
export class EjemploRoutingModule { }
