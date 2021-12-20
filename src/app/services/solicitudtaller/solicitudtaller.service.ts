import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitudTaller } from 'src/app/models/solicitudTaller';

@Injectable({
  providedIn: 'root'
})
export class SolicitudtallerService {
  private API_SERVER = "http://localhost:8090/solicitud/";
  constructor(private httpClient : HttpClient
    ) { 

    }
    public obtenerSolicitud():Observable<any>{
      return this.httpClient.get(this.API_SERVER);
    }
  public saveSolicitud(solicitud:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,solicitud);
  }
  public obtenerSolicitudbyId(id_solicitud:number){
    return this.httpClient.get<solicitudTaller>(this.API_SERVER+id_solicitud);
  }
  Updatesolicitud(solicitud:solicitudTaller){
    return this.httpClient.put<solicitudTaller>(this.API_SERVER + solicitud.id_solicitud, solicitud);
  }

}

