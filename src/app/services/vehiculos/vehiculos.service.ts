import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/models/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private API_SERVER = "http://localhost:8090/vehiculos/";

  constructor(private httpClient : HttpClient) { }

  public getAllVehiculos():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }

  public getVehiculoId(id: number){
    return this.httpClient.get<Vehiculo>(this.API_SERVER+id);
  }

  UpdateVehiculo(vehiculo:Vehiculo){
    return this.httpClient.put<Vehiculo>(this.API_SERVER + vehiculo.placa, vehiculo);
  }

  public deteleVehiculo(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }
}
