import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DocumentalService, DocumentoJuridicoPayload, RPPC, Ficheros } from './documental.service';

@Component({
  selector: 'ngx-documental',
  templateUrl: './documental.component.html',
  styleUrls: ['./documental.component.css']
})
export class DocumentalComponent implements OnInit {
  documentosJuridico: any[] = [];
  payload : DocumentoJuridicoPayload = {} as DocumentoJuridicoPayload;
  ficheros: Ficheros[] = [];
  constructor(
    private spinner: NgxSpinnerService,
    private documental: DocumentalService
  ) { }

  ngOnInit(): void {
    this.documental.getTiposDocumentoJuridico().subscribe((res: any)=>{
      this.documentosJuridico = res;
      this.payload.docinscrito = false;
      this.payload.rppc = {} as RPPC;
    })
  }

  

}
