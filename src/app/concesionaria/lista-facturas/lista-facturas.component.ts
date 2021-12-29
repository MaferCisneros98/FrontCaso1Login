import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent implements OnInit {
  
  cliente: Cliente;
  facturas:any=[];
  cargar:boolean = false;
  factura: any = { detalleList: [] };

  filterPost='';

  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.buscarFacturas();
  }

  buscarFacturas(){
    this.cargar=true;
    this.buscarFacturasService().subscribe(
      (response:any)=> this.mostrarFacturas(response)
    )
  }

  consultar() {
    location.href = "listarclientes";
  }

  mostrarFacturas(response:any){
    this.cargar = false;
    this.facturas = response;
  }

  buscarFacturasService():Observable<any>{
    return this.http.get<any>("http://localhost:8080/facturacuerpo/facturas").pipe(
      catchError(e =>"error")
    )
  }

  eliminar(factura:any){
    this.eliminarFacturaService(factura.id_factura).subscribe(
      (response:any)=> this.buscarFacturas()
    )
  }
  eliminarFacturaService(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/facturacuerpo/eliminar/"+id).pipe(
      catchError(e =>"error")
    )
  }


}
