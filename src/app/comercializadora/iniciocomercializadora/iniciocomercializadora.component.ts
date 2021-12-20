import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';
import { FacturaService } from 'src/app/services/factura/factura.service';

@Component({
  selector: 'app-iniciocomercializadora',
  templateUrl: './iniciocomercializadora.component.html',
  styleUrls: ['./iniciocomercializadora.component.css']
})
export class IniciocomercializadoraComponent implements OnInit {

  productos: Producto[] = [];
  facturas: FacturaCabecera[] = [];
  roles: string[];
  isComercializadora = false;

  constructor(private productoService: ProductoService,
    private facturaService: FacturaService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router:Router) { }

  ngOnInit() {
    this.cargarProductos();
    this.isComercializadora = this.tokenService.comercializadora();
    
  }
  cargarProductos(): void {
    this.facturaService.getAllFacturas().subscribe(
      data => {
        this.facturas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ver(facturaCabecera:FacturaCabecera):void{
    console.log('Dato enviado--> ' + facturaCabecera.id_factura);
    localStorage.setItem("idFactura", facturaCabecera.id_factura.toString());
    this.router.navigate(["verificacion"]);
  }


  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
