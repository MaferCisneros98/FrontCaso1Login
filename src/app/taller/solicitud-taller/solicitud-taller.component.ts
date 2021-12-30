import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-taller',
  templateUrl: './solicitud-taller.component.html',
  styleUrls: ['./solicitud-taller.component.css']
})
export class SolicitudTallerComponent implements OnInit {
  solicitudForm: FormGroup;
  solicitudes: any;
  factura: FacturaCabecera[];
  //facturacabecera:FacturaCabecera[];//select
  constructor(
    public fb: FormBuilder,
    public solicitudService: SolicitudtallerService,
    private facturaservice: FacturaService,
 
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
      facturacabecera: ['', Validators.required],
    });
    this.obtenerOrdenes();
  }
  guardarSolicitud(): void {
    this.solicitudService.saveSolicitud(this.solicitudForm.value).subscribe(resp => {
      this.solicitudForm.reset();
    });
  }

  //llenar select
  obtenerOrdenes() {
    this.facturaservice.getAllFacturas().subscribe(data => {
      //console.log(data.cliente.nombre,"HOLAAAAAAAAA" ) 
      this.factura = data;
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

  get cedula(){return this.solicitudForm.get('cedula');}
  get nombre(){return this.solicitudForm.get('nombre');}
  get placa(){return this.solicitudForm.get('placa');}
  get repuestos(){return this.solicitudForm.get('repuestos');}
  get cantidad(){return this.solicitudForm.get('cantidad');}
  get descripcion(){return this.solicitudForm.get('descripcion');}
  
}