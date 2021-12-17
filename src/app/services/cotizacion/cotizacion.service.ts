import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private API_SERVER = "http://localhost:8090/cotizaciones/"; 

  constructor(private httpClient : HttpClient) { }

  public getAllCotizaciones():Observable<any>{
    return this.httpClient.get(this.API_SERVER);

  }

  public saveCotizacion(cotizacion:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,cotizacion);
  }
}
