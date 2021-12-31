import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamo } from 'src/app/models/Reclamo';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  private API_SERVER = "http://localhost:8080/reclamos/";


  constructor(private httpClient : HttpClient) { }

  public saveReclmamos(reclamo:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,reclamo);
  }

  public getAllReclamos():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 
  }

  public reclamoById(id: number){
    return this.httpClient.get<Reclamo>(this.API_SERVER+id);
  }
  public lista(): Observable<Reclamo[]> {
    return this.httpClient.get<Reclamo[]>(this.API_SERVER + 'search');
  }
  public listarPorEstado(estado:number){
    return this.httpClient.get(this.API_SERVER+'tipo/'+estado);
  }
}
