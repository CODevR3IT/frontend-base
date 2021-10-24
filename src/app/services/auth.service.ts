import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
declare var sha1:any;
// Auth Data poner todos los datos extras
export interface AuthData {
  token: string;
  userData: any;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sessionName = 'session_' + environment.appName;

  constructor(public router: Router) { }

  public setSession(session: AuthData): void {
    localStorage.setItem(this.sessionName, JSON.stringify(session));
  }

  public getSession(): AuthData | boolean {
    if (this.isAuthenticated()) {
      let sesskey = localStorage.getItem(this.sessionName);
      return JSON.parse(sesskey ? sesskey : '');
    } else {
      return false;
    }
  }

  public getToken(): string {
    if (this.isAuthenticated()) {
      let sesskey = localStorage.getItem(this.sessionName);
      return JSON.parse(sesskey ? sesskey : '');
    } else {
      return '';
    }
  }

  public getMenu(): any {
    let sesskey = localStorage.getItem(this.sessionName);
    const sess = JSON.parse(sesskey ? sesskey : '');
    if (sess) {
      return sess.userData.menu;
    } else {
      return [];
    }
  }

  public closeSession(): void {
    localStorage.removeItem(this.sessionName);
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const session = localStorage.getItem(this.sessionName);
    return session ? true : false;
  }

  public hashPassword(password: string): string {
    return this.arrayBufferToBase64(sha1.array(this.toUTF8Array(password)));
  }

  private toUTF8Array(str: string): any[] {
    const utf8 = [];
    for (let i = 0; i < str.length; i++) {
      const charcode = str.charCodeAt(i);
      if (charcode < 0x80) { utf8.push(charcode); }
      else if (charcode < 0x800) {
        utf8.push(0xc0 | (charcode >> 6),
          0x80 | (charcode & 0x3f));
      }
      else if (charcode < 0xd800 || charcode >= 0xe000) {
        utf8.push(0xe0 | (charcode >> 12),
          0x80 | ((charcode >> 6) & 0x3f),
          0x80 | (charcode & 0x3f));
      }
      else {
        // let's keep things simple and only handle chars up to U+FFFF...
        utf8.push(0xef, 0xbf, 0xbd); // U+FFFE "replacement character"
      }
    }
    return utf8;
  }

  private arrayBufferToBase64(buffer: any): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}
