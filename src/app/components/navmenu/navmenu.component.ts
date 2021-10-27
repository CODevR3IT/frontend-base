import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  menu = 1;
  session:any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.session = this.auth.getSession(); 
  }

  closeSession(): void{
    this.auth.closeSession();
  }

}
