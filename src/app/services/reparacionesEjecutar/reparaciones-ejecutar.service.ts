import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReparacionesEjecutarService {
  private API_SERVER = "http://localhost:8080/informe_c/";
  constructor(private httpClient : HttpClient) { }

  public saveInformeC(informe:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save",informe);
  }

  
  public getAllReparacionesEjecutar():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }
}
