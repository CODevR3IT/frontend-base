import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  nav: any[] = [
    {route: '/ejemplo/introduccion', active: false, name:'Introducción',icon:'home', hasChildren: false},
    {route: '/ejemplo/formulario', active: false, name:'Formulario',icon:'comment', hasChildren: false},
    {route: '/ejemplo/paginado', active: false, name:'Páginado',icon:'list_alt',hasChildren: false},
    {route: '', active: false, name:'Submenu',icon:'code', children: [
      {route: '/ejemplo/introduccion', active: false, name:'Introducción',icon:'home'},
      {route: '/ejemplo/introduccion', active: false, name:'Introducción',icon:'home'},
      {route: '/ejemplo/introduccion', active: false, name:'Introducción',icon:'home'}
    ], hasChildren: true}
  ];
  menu = 1;
  session:any;
  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.changeActive();
    this.session = this.auth.getSession(); 
  }

  closeSession(): void{
    this.auth.closeSession();
  }
  changeActive(): void {
    setTimeout(()=>{
      this.nav = this.nav.map(item =>{
        if(this.router.url === item.route){
          item.active = true;
        }else{
          item.active = false;
        }
        return item;
      });
    },5);
  }

}
