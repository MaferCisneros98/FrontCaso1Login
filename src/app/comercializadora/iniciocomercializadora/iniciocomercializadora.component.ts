import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-iniciocomercializadora',
  templateUrl: './iniciocomercializadora.component.html',
  styleUrls: ['./iniciocomercializadora.component.css']
})
export class IniciocomercializadoraComponent implements OnInit {

  productos: Producto[] = [];
  roles: string[];
  isComercializadora = false;

  constructor(private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.cargarProductos();
    this.isComercializadora = this.tokenService.comercializadora();
    
  }
  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
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
