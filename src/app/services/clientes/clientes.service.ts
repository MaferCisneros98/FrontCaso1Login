import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API_SERVER = "http://localhost:8090/clientes/";


  constructor(private httpClient : HttpClient) { }

  public getAllClientes():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }
 
  public saveClientes(cliente:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,cliente);
  }
}
