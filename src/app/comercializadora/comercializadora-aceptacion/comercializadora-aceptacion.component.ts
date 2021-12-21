import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
//correo
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaService } from 'src/app/services/factura/factura.service';

@Component({
  selector: 'app-comercializadora-aceptacion',
  templateUrl: './comercializadora-aceptacion.component.html',
  styleUrls: ['./comercializadora-aceptacion.component.css']
})
export class ComercializadoraAceptacionComponent implements OnInit {
  
  producto: Producto = null;
  factura:FacturaCabecera = new FacturaCabecera();

  constructor(
    private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }


  
  ngOnInit() {
   this.cargar();
  }
  
  cargar() {
    console.log('Ingresa a llamar cargar');
    let id = localStorage.getItem("idFactura");
    console.log('Id... >' + id);
    const that = this;
    this.facturaService.facturaById(+id)
      .subscribe(data => {
        console.log('holii' + data);
        that.factura = data;

      })
  }

  displayBasic: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_sd6en4k', 'template_1nc74yn', e.target as HTMLFormElement, 'user_IvU8IS2fzIeqIl279WKE5'
    )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  
  showDialog() {
      this.displayBasic = true;
  }
}
