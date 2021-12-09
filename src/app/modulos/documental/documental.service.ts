import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface DocumentoJuridicoPayload{
    codtipodocumento: string,
    codtipodocumentojuridico: string,
    fecha: string,
    lugar: string,
    descripcion: string,
    idusuario: string | null,
    organismo: string | null,
    numfolio: string | null,
    idoficialia: string | null,
    numresolucion: string | null,
    docinscrito : boolean,
    rppc : RPPC
    ficheros: Ficheros[]
}

export interface RPPC{
    esantecedente: string,
    fechainscripcion: string,
    folioreal: string | null,
    seccion: string,
    volumen: string,
    tomo: string,
    foja: string,
    partida: string,
    confrontado: string,
    fechaconfronta: string,
    libro: string
}

export interface Ficheros{
    nombre: string,
    descripcion: string,
    base64: string  
}

@Injectable({
  providedIn: 'root'
})
export class DocumentalService {
    endpoint = environment.documentalEndpoint;
    constructor(public http: HttpClient) { }

    getTiposDocumentoJuridico(): Observable<any>{
        return this.http.get(`${this.endpoint}catalogos/tipo-documento-juridico`)
    }
}