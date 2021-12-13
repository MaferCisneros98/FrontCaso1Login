import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformetallerService {
  private API_SERVER = "http://localhost:8080/informe/";
  constructor(private httpClient : HttpClient
    ) { 

    }
 public saveinforme(informe:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,informe);
  }
}
