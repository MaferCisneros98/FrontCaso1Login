import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformetallerService } from 'src/app/services/informetaller/informetaller.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';
import { solicitudTaller } from 'src/app/models/solicitudTaller';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';

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
  constructor(
    public fb: FormBuilder,
    public informeService: InformetallerService,
    public solicitudService: SolicitudtallerService,
    private facturaservice: FacturaService,

  ) { }

  ngOnInit(): void {

    this.informeForm = this.fb.group({
      id_InformeTaller: [''],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      descripcion: ['', Validators.required],
      total: ['', Validators.required],
      facturacabecera: ['', Validators.required],

    });
    this.obtenerFacturas();
  }
  recuperarDatos() {
    let id = localStorage.getItem("id");
    this.solicitudService.obtenerSolicitudbyId(+id)
      .subscribe(data => {
        this.solicitudTaller = data;
      })
  }



  guardar(): void {
    this.informeService.saveInforme(this.informeForm.value).subscribe(resp => {
      this.informeForm.reset();

    },
      error => { console.error(error) }
    )
  }


  obtenerFacturas() {

    this.facturaservice.getAllFacturas().subscribe(data => {
      //  console.log(data.cliente.nombre,"HOLAAAAAAAAA" ) 

      this.facturacabecera = data;

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
  get cedula(){return this.informeForm.get('cedula');}
  get nombre(){return this.informeForm.get('nombre');}
  get placa(){return this.informeForm.get('placa');}
  get descripcion(){return this.informeForm.get('descripcion');}
  get total(){return this.informeForm.get('total');}
  
}