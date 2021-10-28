import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  constructor(private bsLocaleService: BsLocaleService) { }

  ngOnInit(): void {
    this.bsLocaleService.use('es');
  }

}
