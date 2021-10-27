import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemploRoutingModule } from './ejemplo-routing.module';
import { EjemploComponent } from './ejemplo.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PaginadoComponent } from './paginado/paginado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { NavComponent } from './nav/nav.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [
    EjemploComponent,
    PaginadoComponent,
    FormularioComponent,
    IntroduccionComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    EjemploRoutingModule,
    HeaderModule,
    FooterModule,
    AvatarModule
  ]
})
export class EjemploModule { }
