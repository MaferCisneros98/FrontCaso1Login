import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private API_SERVER = "http://localhost:8080/vehiculos/";

  constructor(private httpClient : HttpClient) { }

  public getAllVehiculos():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }
}
