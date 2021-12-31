import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { OrdenReparacionService } from 'src/app/services/ordenReparacion/orden-reparacion.service';
import { OrdenReparacion } from 'src/app/models/OrdenReparacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-taller',
  templateUrl: './solicitud-taller.component.html',
  styleUrls: ['./solicitud-taller.component.css']
})
export class SolicitudTallerComponent implements OnInit {
  solicitudForm: FormGroup;
  solicitudes: any;
  orden: OrdenReparacion[];
  nombres:String;
 
  constructor(
    public fb: FormBuilder,
    public solicitudService: SolicitudtallerService,
    private ordenservice: OrdenReparacionService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.solicitudForm = this.fb.group({
      id_solicitud: [''],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      repuestos: ['', Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      ordenreparacion: ['', Validators.required],
    });
    this.CargarOrden();
  }
  guardarSolicitud(): void {
    this.solicitudService.saveSolicitud(this.solicitudForm.value).subscribe(resp => {
      this.solicitudForm.reset();
    });
    alert("Solicitud Guardada");
    this.router.navigate(["listasolicitud"]);
  }

  CargarOrden() {
    this.ordenservice.getAllOrdenR().subscribe(data => {
      this.orden = data;
    })
  }
 
  //enviar email
  displayBasic: boolean = false;
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_2uigqxe', 'template_4v3pz8j', e.target as HTMLFormElement, 'user_iOEV6Zfbsut42elQIXKnQ'
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

  //cargardatos select
  onChange(event) {
    this.nombres = this.orden[event.target.options.selectedIndex].cliente.nombre+" "+this.orden[event.target.options.selectedIndex].cliente.apellido
    this.solicitudForm.controls['nombre'].setValue(this.nombres);
    this.solicitudForm.controls['cedula'].setValue(this.orden[event.target.options.selectedIndex].cliente.cedula);
    this.solicitudForm.controls['placa'].setValue(this.orden[event.target.options.selectedIndex].vehiculo.placa);
  }

  get cedula() { return this.solicitudForm.get('cedula'); }
  get nombre() { return this.solicitudForm.get('nombre'); }
  get placa() { return this.solicitudForm.get('placa'); }
  get repuestos() { return this.solicitudForm.get('repuestos'); }
  get cantidad() { return this.solicitudForm.get('cantidad'); }
  get descripcion() { return this.solicitudForm.get('descripcion'); }

}