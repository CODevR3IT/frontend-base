import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentalComponent } from './documental.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    DocumentalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BsDatepickerModule
  ],
  exports: [
    DocumentalComponent
  ]
})
export class DocumentalModule { }
