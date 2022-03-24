import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  session:any;
  constructor(
    private auth: AuthService,
    public sidebarservice: SidebarService) { }

  ngOnInit(): void {
    this.session = this.auth.getSession();
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  closeSession(): void{
    this.auth.closeSession();
  }
  
}
