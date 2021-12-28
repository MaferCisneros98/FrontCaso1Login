import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaCuerpo } from 'src/app/models/FacturaCuerpo';
import { Producto } from 'src/app/models/producto';
import { Reclamo } from 'src/app/models/Reclamo';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-iniciocomercializadora',
  templateUrl: './iniciocomercializadora.component.html',
  styleUrls: ['./iniciocomercializadora.component.css']
})
export class IniciocomercializadoraComponent implements OnInit {

  productos: Producto[] = [];
  facturas: FacturaCabecera[] = [];
  factura: FacturaCuerpo[] = [];
  reclamos: Reclamo[];
  roles: string[];
  isComercializadora = false;

  constructor(private productoService: ProductoService,
    private facturaService: FacturaService,
    private reclamoService: ReclamosService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router:Router) { }

  ngOnInit() {
    
    this.cargarReclamo();
    
  }

  cargarReclamo(): void {
    this.reclamoService.lista().subscribe(
      data => {
        this.reclamos = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  verReclamo(reclamos:Reclamo):void{
    console.log('Dato enviado--> ' + reclamos.motivo);
    localStorage.setItem("idReclamo", reclamos.id_reclamo.toString());
    this.router.navigate(["verificacion"]);

  }
  /*ver(facturaCabecera:FacturaCabecera):void{
    console.log('Dato enviado--> ' + facturaCabecera.id_factura);
    localStorage.setItem("idFactura", facturaCabecera.id_factura.toString());
    this.router.navigate(["verificacion"]);

  }*/

  
}
