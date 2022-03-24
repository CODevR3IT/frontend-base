import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
