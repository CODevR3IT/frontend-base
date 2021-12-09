import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  session: any;
  appName = environment.appName;
  menus: any = [];
  constructor(public sidebarservice: SidebarService,
    private auth: AuthService,
    ) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
    this.session = this.auth.getSession();
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu: any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element: any) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu: any): string {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  closeSession(): void{
    this.auth.closeSession();
  }


}
