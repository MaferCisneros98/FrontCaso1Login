import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Cliente } from 'src/app/models/Cliente';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { Reclamo } from 'src/app/models/Reclamo';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-rechazoInforme',
  templateUrl: './rechazo.component.html',
  styleUrls: ['./rechazo.component.css']
})
export class RechazoComponent implements OnInit {
  factura: FacturaCabecera = new FacturaCabecera();
  reclamo: Reclamo = new Reclamo();

  constructor(private facturaService: FacturaService,
    private reclamoService: ReclamosService,
    ) { }
  // test para recuperar la contrasena
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
          alert('Se guardo correctamente se enviara un mail al cliente rechazo');
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
  }
  showDialog() {
    this.displayBasic = true;
  }
  ngOnInit() {
   
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

 


}