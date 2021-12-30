import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { Producto } from 'src/app/models/producto';
import { Reclamo } from 'src/app/models/Reclamo';
import { ProductoService } from 'src/app/service/producto.service';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-informe-rechazo',
  templateUrl: './informe-rechazo.component.html',
  styleUrls: ['./informe-rechazo.component.css']
})
export class InformeRechazoComponent implements OnInit {

  producto: Producto = null;
  factura:FacturaCabecera = new FacturaCabecera();
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
  
      this.reclamo.estadoReclamo = 3;
  
      this.reclamoService.saveReclmamos(this.reclamo).subscribe(resp => {
        console.log("guardado correctamente");
        e.preventDefault();
        emailjs.sendForm('service_sd6en4k', 'template_1nc74yn', e.target as HTMLFormElement, 'user_IvU8IS2fzIeqIl279WKE5'
        )
          .then((result: EmailJSResponseStatus) => {
            console.log(result.text);
            this.toastr.success('Se guardo correctamente se enviara un mail al cliente ' , 'OK', {
              timeOut: 3000, positionClass: 'toast-top-center'
            });
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
