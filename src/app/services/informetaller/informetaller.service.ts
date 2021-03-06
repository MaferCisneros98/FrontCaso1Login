import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { informeTaller } from 'src/app/models/informeTaller';
@Injectable({
  providedIn: 'root'
})
export class InformetallerService {
  private API_SERVER = "http://localhost:8080/informe/";
  constructor(private httpClient : HttpClient
    ) { 

    }

    public obtenerInforme():Observable<any>
  {
    return this.httpClient.get(this.API_SERVER);
  }

 public saveInforme(informe:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,informe);
  }
  public obtenerInformebyId(id_informetaller:number){
    return this.httpClient.get<informeTaller>(this.API_SERVER+id_informetaller);
  }
  UpdateInforme(informe:informeTaller){
    return this.httpClient.put<informeTaller>(this.API_SERVER + informe.id_informetaller, informe);
  }
}
