import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API_SERVER = "http://localhost:8090/clientes/";


  constructor(private httpClient : HttpClient) { }

  public getAllClientes():Observable<any>{
    return this.httpClient.get(this.API_SERVER); 

  }
    
  public saveClientes(cliente:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,cliente);
  }

  public getClienteId(id: number){
    return this.httpClient.get<Cliente>(this.API_SERVER+id);
  }

  UpdateCliente(cliente:Cliente){
    return this.httpClient.put<Cliente>(this.API_SERVER + cliente.id_cliente, cliente);
  }

  public deteleCliente(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }
}
