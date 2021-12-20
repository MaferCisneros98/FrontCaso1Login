import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Garantia } from '../../models/Garantia';



@Injectable({
    providedIn: 'root'
  })
  export class Solicitudes {
  
    private API_SERVER = "http://localhost:8090/garantias/"; 
  
    constructor(private httpClient : HttpClient) { }
  
    public getAllSolicitudes():Observable<any>{
      return this.httpClient.get(this.API_SERVER);
  
    }

    public saveGarantia(garantia:any):Observable<any>{
      return this.httpClient.post(this.API_SERVER,garantia);
    }
  
    public getGarantiaId(id: any):Observable<Garantia>{
      return this.httpClient.get<Garantia>(this.API_SERVER+id);
    }
  
    UpdateGarantia(garantia: Garantia){
      return this.httpClient.put<Garantia>(this.API_SERVER + garantia.id_garantia, garantia);
    }
  }