import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DespachoRepuestosService {

private API_SERVER = "http://localhost:8080/despacho";
  constructor(private httpClient : HttpClient) { }
  
  public getAllDespacho():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }
    
  public saveDespacho(d:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER+"/save",d);
  }

}
