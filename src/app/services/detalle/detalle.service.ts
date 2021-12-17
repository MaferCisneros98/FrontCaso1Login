import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaCuerpo } from '../../models/FacturaCuerpo';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private API_SERVER = "http://localhost:8080/facturacuerpo/";

  constructor(private httpClient : HttpClient) { }

  public saveDetalles(cliente:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,cliente);
  }

  createDetalle(detalleFactura:FacturaCuerpo){
    return this.httpClient.post<FacturaCuerpo>(this.API_SERVER+"guardar/",detalleFactura);

  }
}
