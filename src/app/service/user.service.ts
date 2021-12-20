import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  productoURL = 'http://localhost:8080/api/usuario';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<NuevoUsuario[]> {
    return this.httpClient.get<NuevoUsuario[]>(this.productoURL);
  }

}
