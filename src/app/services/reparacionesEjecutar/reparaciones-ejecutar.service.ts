import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReparacionesEjecutarService {
  private API_SERVER = "http://localhost:8090/informeC/";
  constructor(private httpClient : HttpClient) { }
  public saveInformeC(informe:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,informe);
  }
  
  
}
