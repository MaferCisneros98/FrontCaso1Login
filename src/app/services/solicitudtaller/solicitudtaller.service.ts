import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudtallerService {
  private API_SERVER = "http://localhost:8080/solicitud/";
  constructor(private httpClient : HttpClient
    ) { 

    }
  public saveSolicitud(solicitud:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,solicitud);
  }
}
