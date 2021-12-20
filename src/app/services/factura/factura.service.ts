import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaCabecera } from '../../models/FacturaCabecera';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private API_SERVER = "http://localhost:8080/facturacabecera/";

  constructor(private httpClient : HttpClient) { }

  public saveFactura(factura_cabecera:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,factura_cabecera);
  }

  createFactura(facturaCabecera:FacturaCabecera){
    return this.httpClient.post<FacturaCabecera>(this.API_SERVER+"guardar/",facturaCabecera);

  }


}
