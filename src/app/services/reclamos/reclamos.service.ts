import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  private API_SERVER = "http://localhost:8080/reclamos/";


  constructor(private httpClient : HttpClient) { }

  
 
  public saveReclmamos(reclamo:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,reclamo);
  }
}
