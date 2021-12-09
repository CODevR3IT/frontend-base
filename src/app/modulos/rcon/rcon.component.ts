import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ngx-rcon',
  templateUrl: './rcon.component.html',
  styleUrls: ['./rcon.component.css']
})
export class RconComponent implements OnInit {
  @Output() getPersona = new EventEmitter<any>();
  @Input() showPerito = false;
  @Input() showNotario = true;
  @Input() showSociedad = false;
  busqueda: string = '';
  clave: string = '';
  rfc: string = '';
  nombre: string = '';
  pagina = 1;
  perPage = 0;
  total = 0;

  data: any[] = [];
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }
  seleccionar(persona: any): void{
    this.getPersona.emit(persona);
  }
  buscar(evt: any = undefined) {
    if(evt){
      this.pagina = evt.page;
    }else{
      this.pagina = 1;
    }
    switch (this.busqueda) {
      case 'notario':
        this.getNotario();
        break;
      case 'perito':
        this.getPerito();
        break;
      case 'sociedad':
        this.getSociedad();
        break;
      default:
        break;
    }
  }
  getNotario(): void {
    this.spinner.show();
    let filtros = '';
    if (this.clave) {
      filtros = filtros + '&numnotario=' + this.clave;
    }
    if (this.nombre) {
      filtros = filtros + '&nombrecompleto=' + this.nombre;
    }
    if (this.rfc) {
      filtros = filtros + '&rfc=' + this.rfc;
    }

    this.http
      .get(
        environment.rconEndpoint + 'persona/notario?page=' + this.pagina + filtros,
      )
      .subscribe(
        (res: any) => {
          this.spinner.hide();
          this.data = res.data;
          this.total = res.total;
          this.perPage = res.per_page;

        },
        (error) => {
          this.spinner.hide();
          this.data = [];
          this.total = 0;
          this.perPage = 0;
        }
      );

  }

  getPerito(): void {
    this.spinner.show();
    let queryParamFiltros = '';
    if (this.clave) {
      queryParamFiltros = queryParamFiltros + '&reg=' + this.clave;
    } else {
      if (this.nombre) {
        queryParamFiltros = queryParamFiltros + '&nombrecompleto=' + this.nombre;
      }
      if (this.rfc) {
        queryParamFiltros = queryParamFiltros + '&rfc=' + this.rfc;
      }
     
    }
    this.http.get(environment.rconEndpoint + 'persona/perito?page=' + this.pagina + queryParamFiltros)
      .subscribe(
        (res: any) => {
          this.spinner.hide();
          this.data = res.data;
          this.total = res.total;
          this.perPage = res.per_page;

        },
        (error) => {
          this.spinner.hide();
          this.data = [];
          this.total = 0;
          this.perPage = 0;
        }
      );
  }
  getSociedad(): void {
    this.spinner.show();
    let queryParamFiltros = '';
    if (this.clave) {
      queryParamFiltros = queryParamFiltros + '&reg=' + this.clave;
    } else {
      if (this.nombre) {
        queryParamFiltros = queryParamFiltros + '&nombre=' + this.nombre;
      }
    }
    this.http.get(environment.rconEndpoint + 'persona/sociedad?page=' + this.pagina + queryParamFiltros)
      .subscribe(
        (res: any) => {
          this.spinner.hide();
          this.data = res.data;
          this.total = res.total;
          this.perPage = res.per_page;

        },
        (error) => {
          this.spinner.hide();
          this.data = [];
          this.total = 0;
          this.perPage = 0;
        }
      );
  }

}
