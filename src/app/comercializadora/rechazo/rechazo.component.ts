import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaService } from 'src/app/services/factura/factura.service';

@Component({
  selector: 'app-rechazoInforme',
  templateUrl: './rechazo.component.html',
  styleUrls: ['./rechazo.component.css']
})
export class RechazoComponent implements OnInit {
  factura: FacturaCabecera = new FacturaCabecera();
  constructor(private facturaService: FacturaService) { }
  // test para recuperar la contrasena
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
  ngOnInit() {
   
  }

 


}