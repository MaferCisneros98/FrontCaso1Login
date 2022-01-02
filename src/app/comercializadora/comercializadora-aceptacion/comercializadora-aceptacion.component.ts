import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
//correo
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { Cliente } from 'src/app/models/Cliente';
import { Reclamo } from 'src/app/models/Reclamo';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-comercializadora-aceptacion',
  templateUrl: './comercializadora-aceptacion.component.html',
  styleUrls: ['./comercializadora-aceptacion.component.css']
})
export class ComercializadoraAceptacionComponent implements OnInit {

  producto: Producto = null;
  factura: FacturaCabecera = new FacturaCabecera();
  reclamo: Reclamo = new Reclamo();


  constructor(
    private facturaService: FacturaService,
    private reclamoService: ReclamosService,
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
   this.reclamo.cliente = new Cliente();
    this.reclamoService.reclamoById(+id)
      .subscribe(data => {
        console.log('holii' + data);
        that.reclamo = data;

      })
  }

  displayBasic: boolean = false;

  public sendEmail(e: Event) {

    this.reclamo.estadoReclamo = 2;

    this.reclamoService.saveReclmamos(this.reclamo).subscribe(resp => {
      console.log("guardado correctamente");
      e.preventDefault();
      emailjs.sendForm('service_tli8hyl','template_a1nznmp', e.target as HTMLFormElement, 'user_t6S96GZrp23U5L3TaibHm'
      )
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Se guardo correctamente se enviara un mail al cliente');
        }, (error) => {
          console.log(error.text);
          alert('Se guardo correctamente, pero no se pudo enviar mail al cliente');
        });

    },
      error => { 
        console.log(error) ;
        alert('Error al Guardar');
      
      }
    );

    
 /*   if(this.guardar()){
      e.preventDefault();
      emailjs.sendForm('service_sd6en4k', 'template_1nc74yn', e.target as HTMLFormElement, 'user_IvU8IS2fzIeqIl279WKE5'
      )
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Se guardo correctamente se enviara un mail al cliente');
        }, (error) => {
          console.log(error.text);
          alert('Se guardo correctamente, pero no se pudo enviar mail al cliente');
        });
    } else {
      alert('Error no se pudo guardar');
    }
*/
    
  }
  
  guardar(): boolean {
    let respuesta = false;
    this.reclamoService.saveReclmamos(this.reclamo).subscribe(resp => {
      console.log("guardado correctamente");
      respuesta= true;
    },
      error => { 
        console.log(error) ;
        respuesta =  false;
      }
    );
    return respuesta;
  }
  showDialog() {
    this.displayBasic = true;
  }
}
