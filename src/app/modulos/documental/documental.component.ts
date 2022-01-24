import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DocumentalService, DocumentoJuridicoPayload, RPPC, Ficheros } from './documental.service';
import {format} from 'date-fns';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-documental',
  templateUrl: './documental.component.html',
  styleUrls: ['./documental.component.css']
})
export class DocumentalComponent implements OnInit {
  @Output() getDocumentoDigital = new EventEmitter<any>();
  documentosJuridico: any[] = [];
  payload : DocumentoJuridicoPayload = {} as DocumentoJuridicoPayload;
  ficheros: Ficheros[] = [];
  file:any;
  fechaaux:any;
  fechaInscripcion:any;
  fechaConfronta: any;
  constructor(
    private spinner: NgxSpinnerService,
    private documental: DocumentalService
  ) { }

  ngOnInit(): void {
    this.documental.getTiposDocumentoJuridico().subscribe((res: any)=>{
      this.documentosJuridico = res;
      this.payload.docinscrito = false;
      this.payload.rppc = {
        esantecedente: '',
        fechainscripcion: '',
        folioreal: '',
        seccion: '',
        volumen: '',
        tomo: '',
        foja: '',
        partida: '',
        confrontado: '',
        fechaconfronta: '',
        libro: ''
      } as RPPC;
    })
  }

  addFile(event: any): void{
    let files = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.ficheros.push({
        nombre: files[0].name,
        descripcion: files[0].name,
        base64: reader.result
      });
      this.file = null;
    }
  }

  removeFile(index: any): void{
    this.ficheros.splice(index,1);
  }

  guardarArchivos(): void {
    this.spinner.show();
    this.payload.ficheros = this.ficheros;
    if(this.fechaaux){
      this.payload.fecha = format(this.fechaaux,'yyyy-MM-dd');
    }
    if(this.fechaInscripcion){
      this.payload.rppc.fechainscripcion = format(this.fechaInscripcion,'yyyy-MM-dd');
    }
    if(this.fechaConfronta){
      this.payload.rppc.fechaconfronta = format(this.fechaConfronta,'yyyy-MM-dd');
    }

    this.documental.guardarDocumentoJuridico(this.payload).subscribe((res: any)=>{
      this.getDocumentoDigital.emit(res.iddocumentodigital);
      Swal.fire({
        title: 'Correcto',
        text: res.mensaje,
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
      this.spinner.hide();
    },(err)=>{
      Swal.fire({
        title: 'Error',
        text: err.error.mensaje,
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
      this.spinner.hide();
    })

  }

}
