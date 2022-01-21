import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface Login {
  login: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  appName = environment.appName;
  version = environment.version;
  descripcion = 'Gráfica Base';
  logIn : Login = {} as Login;
  errorMsj = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: environment.ssoToken,
    }),
  };
  constructor(private spinner: NgxSpinnerService,
    private route: Router,
    private auth: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.spinner.show();
    this.errorMsj = '';
    const payload = {login: this.logIn.login, password: this.auth.hashPassword(this.logIn.password)}
    this.http.post(environment.ssoEndpoint, payload,this.httpOptions)
    .subscribe((res:any) => {
      this.spinner.hide();
      this.auth.setSession({token:res, userData: res });
      this.route.navigate(['/ejemplo']);
    }, (err: any) =>{
      this.spinner.hide();
      this.errorMsj = err.error.mensaje;
    });
  }
}
