import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repuestos } from 'src/app/models/repuestos';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  private API_SERVER = "http://localhost:8080/repuestos/";


  constructor(private httpClient : HttpClient) { }

  public saveRepuestos(repuesto:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,repuesto);
  }
  public getAllRepuestos():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }

  public getRepuestoId(id: number){
    return this.httpClient.get<Repuestos>(this.API_SERVER+id);
  }

  UpdateRepuesto(repuestos:Repuestos){
    return this.httpClient.put<Repuestos>(this.API_SERVER + repuestos.id_repuesto, repuestos);
  }

  public deleteRepuesto(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER +id);
  }
}
