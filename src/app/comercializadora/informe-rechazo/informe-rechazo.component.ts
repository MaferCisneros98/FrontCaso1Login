import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-informe-rechazo',
  templateUrl: './informe-rechazo.component.html',
  styleUrls: ['./informe-rechazo.component.css']
})
export class InformeRechazoComponent implements OnInit {

  constructor() { }
  ngOnInit() {
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
