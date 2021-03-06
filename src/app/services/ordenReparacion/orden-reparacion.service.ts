import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenReparacionService {

  private API_SERVER = "http://localhost:8080/ordenR/";
  constructor(private httpClient : HttpClient) { }
  
  public saveordenR(orden:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+"save",orden);
  }
  
  public getAllOrdenR():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }
}