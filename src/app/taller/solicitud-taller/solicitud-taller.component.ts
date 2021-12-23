import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-solicitud-taller',
  templateUrl: './solicitud-taller.component.html',
  styleUrls: ['./solicitud-taller.component.css']
})
export class SolicitudTallerComponent implements OnInit {
  solicitudForm: FormGroup;
  solicitudes: any;
  constructor(
    public fb: FormBuilder,
    public solicitudService: SolicitudtallerService,

  ) { }

  ngOnInit(): void {
    this.solicitudForm=this.fb.group({
      id_solicitud: [''],
      id_cliente: ['', Validators.required],
      placa: ['', Validators.required],
      repuestos: ['', Validators.required],
      descripcion: ['', Validators.required],
    
  });}
  guardarSolicitud(): void{
    this.solicitudService.saveSolicitud(this.solicitudForm.value).subscribe(resp =>{
      this.solicitudForm.reset();
      this.solicitudes=this.solicitudes.filter(solicitud => resp.id!==solicitud.id);
      this.solicitudes.push(resp);
    },
      error => {console.error(error)}
    )
  }
  
  displayBasic: boolean = false;
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_5up9k1b', 'template_omqqqsa', e.target as HTMLFormElement, 'user_FdjTVgCweoSvdsrOBPXy4'
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
