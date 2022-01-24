import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  persona: any;
  documentoDigital: any;
  constructor() { }

  ngOnInit(): void {
  }

  setPersona(persona:any){
    this.persona = persona;
  }

  setDocumentoDigital(iddocumentodigital:any){
    this.documentoDigital = iddocumentodigital;
  }

}
