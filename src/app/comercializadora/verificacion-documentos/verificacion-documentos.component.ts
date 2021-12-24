import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaCuerpo } from 'src/app/models/FacturaCuerpo';
import { Reclamo } from 'src/app/models/Reclamo';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-verificacion-documentos',
  templateUrl: './verificacion-documentos.component.html',
  styleUrls: ['./verificacion-documentos.component.css']
})
export class VerificacionDocumentosComponent implements OnInit {


  factura:FacturaCabecera = new FacturaCabecera();
  reclamo: Reclamo = new Reclamo();
  
  constructor(
    private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private reclamosService: ReclamosService,
    private router: Router
    ) { }


  
  ngOnInit() {
    //this.cagar();
    this. cagarReclamo();
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
  /*cagar(){
    console.log('Ingresa a llamar cargar');
    let id=localStorage.getItem("idFactura");
    console.log('Id... >' + id);
    const that = this;
    this.factura.cliente = new Cliente();
    this.facturaService.facturaById(+id)
    .subscribe(data=>{
      console.log('holii'+ data);
      that.factura=data;
      
    })
  }*/

  cagarReclamo(){
    console.log('Ingresa a llamar cargar');
    let id=localStorage.getItem("idReclamo");
    console.log('Id... >' + id);
    const that = this;
    this.reclamo.cliente = new Cliente();
    this.reclamosService.reclamosById(+id)
    .subscribe(data=>{
      console.log('holii'+ data);
      that.reclamo=data;
      
    })
  }

  

  onUpdate(): void {
   
  }

}