import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    NavmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule.forRoot(),
    AvatarModule
  ],
  exports:[NavmenuComponent]
})
export class NavmenuModule { }
