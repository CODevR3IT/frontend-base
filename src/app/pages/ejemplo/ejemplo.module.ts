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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { NgxSpinnerModule } from "ngx-spinner";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SubmenuComponent } from './submenu/submenu.component';
defineLocale('es', esLocale);

@NgModule({
  declarations: [
    EjemploComponent,
    PaginadoComponent,
    FormularioComponent,
    IntroduccionComponent,
    NavComponent,
    SubmenuComponent,
  ],
  imports: [
    CommonModule,
    EjemploRoutingModule,
    HeaderModule,
    FooterModule,
    AvatarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot()
  ]
})
export class EjemploModule { }
