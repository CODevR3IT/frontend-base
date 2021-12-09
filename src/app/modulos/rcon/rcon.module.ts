import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RconComponent } from './rcon.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    RconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    PaginationModule
  ],
  exports: [
    RconComponent
  ]
})
export class RconModule { }
