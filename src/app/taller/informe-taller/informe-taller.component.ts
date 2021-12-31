import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformetallerService } from 'src/app/services/informetaller/informetaller.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';
import { solicitudTaller } from 'src/app/models/solicitudTaller';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { OrdenReparacion } from 'src/app/models/OrdenReparacion';
import { OrdenReparacionService } from 'src/app/services/ordenReparacion/orden-reparacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informe-taller',
  templateUrl: './informe-taller.component.html',
  styleUrls: ['./informe-taller.component.css']
})
export class InformeTallerComponent implements OnInit {
  informeForm: FormGroup;
  informes: any;
  solicitudTaller: solicitudTaller = new solicitudTaller();
  facturacabecera: FacturaCabecera[];
  orden: OrdenReparacion[];
  nombres:String;
  
  constructor(
    public fb: FormBuilder,
    public informeService: InformetallerService,
    public solicitudService: SolicitudtallerService,
    private facturaservice: FacturaService,
    private ordenservice:OrdenReparacionService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.informeForm = this.fb.group({
      id_InformeTaller: [''],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      descripcion: ['', Validators.required],
      total: ['', Validators.required],
      ordenreparacion: ['', Validators.required],
      

    });
    this.CargarOrden();
  }

  guardar(): void {
    this.informeService.saveInforme(this.informeForm.value).subscribe(resp => {
      this.informeForm.reset();

    },
      error => { console.error(error) }
      
    )
    alert("Informe Guardado");
    this.router.navigate(["listainforme"]);
  }


  CargarOrden() {
    this.ordenservice.getAllOrdenR().subscribe(data => {
      this.orden = data;
    })
  }


  displayBasic: boolean = false;
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_2uigqxe', 'template_jgwgr5r', e.target as HTMLFormElement, 'user_iOEV6Zfbsut42elQIXKnQ'
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

  onChange(event) {
    this.nombres = this.orden[event.target.options.selectedIndex].cliente.nombre+" "+this.orden[event.target.options.selectedIndex].cliente.apellido
    this.informeForm.controls['nombre'].setValue(this.nombres);
    this.informeForm.controls['cedula'].setValue(this.orden[event.target.options.selectedIndex].cliente.cedula);
    this.informeForm.controls['placa'].setValue(this.orden[event.target.options.selectedIndex].vehiculo.placa);
  }

  get cedula(){return this.informeForm.get('cedula');}
  get nombre(){return this.informeForm.get('nombre');}
  get placa(){return this.informeForm.get('placa');}
  get descripcion(){return this.informeForm.get('descripcion');}
  get total(){return this.informeForm.get('total');}
  
}