import { Component, OnInit } from '@angular/core';
import {format} from 'date-fns';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  payload: any = {};
  constructor(private spinner: NgxSpinnerService) { }
  alcaldias = [
    {id:  9,nombre:'Milpa Alta' },
    {id:  14,nombre:'Benito Juárez' },
    {id:  5,nombre:'Gustavo A. Madero' },
    {id:  3,nombre:'Coyoacán' },
    {id:  16,nombre:'Miguel Hidalgo' },
    {id:  8,nombre:'La Magdalena Contreras' },
    {id:  11,nombre:'Tláhuac' },
    {id:  2,nombre:'Azcapotzalco' },
    {id:  6,nombre:'Iztacalco' },
    {id:  10,nombre:'Álvaro Obregón' },
    {id:  13,nombre:'Xochimilco' },
    {id:  17,nombre:'Venustiano Carranza' },
    {id:  12,nombre:'Tlalpan' },
    {id:  4,nombre:'Cuajimalpa de Morelos' },
    {id:  15,nombre:'Cuauhtémoc' },
    {id:  7,nombre:'Iztapalapa' }
  ];
  alcaldiasTypeAhead: string[] = [];
  ngOnInit(): void {
    this.alcaldiasTypeAhead = this.alcaldias.map(item =>{
      return item.nombre;
    });
  }
  submit(): void{
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      Swal.fire({
        title: 'Correcto',
        text: 'Se guardó su información correctamente',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      }
      );
    },3000);
    
    console.log(this.payload);
    console.log(format(this.payload.fecha, 'MM/dd/yyyy'));
  }

}
