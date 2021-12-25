import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SolicitudGarantia } from "src/app/models/SolicitudGarantia";




@Injectable({
    providedIn: 'root'
  })
  export class Solicitudes {
  
    private API_SERVER = "http://localhost:8080/garantias/"; 
  
    constructor(private httpClient : HttpClient) { }
  
    public getAllSolicitudes():Observable<any>{
      return this.httpClient.get(this.API_SERVER);
  
    }

    public saveGarantia(solicitudgarantia:any):Observable<any>{
      return this.httpClient.post(this.API_SERVER,solicitudgarantia);
    }
  
    public getGarantiaId(id: any):Observable<SolicitudGarantia>{
      return this.httpClient.get<SolicitudGarantia>(this.API_SERVER+id);
    }
  
    UpdateGarantia(solicitudgarantia: SolicitudGarantia){
      return this.httpClient.put<SolicitudGarantia>(this.API_SERVER + solicitudgarantia.id_solicitudgarantia, solicitudgarantia);
    }
  }