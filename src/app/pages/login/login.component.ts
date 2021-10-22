import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appName = environment.appName;
  version = environment.version;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  show(): void{
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },5000)
    
    //Swal.fire('Hello world!');
  }
}
