import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.css']
})
export class PaginadoComponent implements OnInit {
  total = 0;
  perPage = 0;
  data: any[] = [];
  errMsj = '';
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(evtPage:any = {page : 1}){
    this.spinner.show();
    this.http.get(`http://ovica.linesolutions.tech/rcon-backend/public/api/v1/persona/notario?page=${evtPage.page}`).subscribe(
      (res:any) =>{
        this.spinner.hide();
        this.total = res.total
        this.perPage = res.per_page;
        this.data = res.data
      },
      (err: any) => {
        this.spinner.hide();
        this.data = [];
        this.errMsj = err.error.mensaje;
      }
    );
  }

}
