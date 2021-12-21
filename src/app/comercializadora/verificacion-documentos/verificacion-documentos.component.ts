import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaCuerpo } from 'src/app/models/FacturaCuerpo';
import { FacturaService } from 'src/app/services/factura/factura.service';

@Component({
  selector: 'app-verificacion-documentos',
  templateUrl: './verificacion-documentos.component.html',
  styleUrls: ['./verificacion-documentos.component.css']
})
export class VerificacionDocumentosComponent implements OnInit {


  factura:FacturaCabecera = new FacturaCabecera();
  
  constructor(
    private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }


  
  ngOnInit() {
    this.cagar();
  }
  ver(facturaCabecera:FacturaCabecera):void{
    console.log('Dato enviado--> ' + facturaCabecera.id_factura);
    localStorage.setItem("idFactura", facturaCabecera.id_factura.toString());
    this.router.navigate(["verificacion"]);

  }
  verRechazo(facturaCabecera:FacturaCabecera):void{
    console.log('Dato enviado--> ' + facturaCabecera.id_factura);
    localStorage.setItem("idFactura", facturaCabecera.id_factura.toString());
    this.router.navigate(["informe-rechazo"]);

  }
  verAceptacion(facturaCabecera:FacturaCabecera):void{
    console.log('Dato enviado--> ' + facturaCabecera.id_factura);
    localStorage.setItem("idFactura", facturaCabecera.id_factura.toString());
    this.router.navigate(["comercializadora-aceptacion"]);

  }
  cagar(){
    console.log('Ingresa a llamar cargar');
    let id=localStorage.getItem("idFactura");
    console.log('Id... >' + id);
    const that = this;
    this.facturaService.facturaById(+id)
    .subscribe(data=>{
      console.log('holii'+ data);
      that.factura=data;
      
    })
  }

  
  onUpdate(): void {
   
  }

}