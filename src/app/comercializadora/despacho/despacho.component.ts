import { Component, NgZone, OnInit, Output } from '@angular/core';
import { Repuestos } from 'src/app/models/repuestos';
import { RepuestosService } from 'src/app/services/repuestos/repuestos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarRepuestosPipe } from 'src/app/pipes/buscar-repuestos.pipe';
import { EventEmitter } from 'protractor';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { DespachoRepuestosService } from 'src/app/services/despacho/despacho-repuestos.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {
 repuestos: any;
  repuesto: Repuestos[];
  listaReceptora: Repuestos[];
  listaEmisora: any;
  injector;
  DespachoForm: FormGroup;
  orden: any = {};
  placa: string = '';
  despacho: any = {};
 

 constructor(

    public fb: FormBuilder,
    public repuestosService: RepuestosService,
    public despachoRepuestosServices: DespachoRepuestosService,
    private router: Router
  ) {
    this.listaReceptora = [];
  }
  filterPost = '';
  ngOnInit() {
    this.orden = JSON.parse(localStorage.getItem('orden'));
    this.obtener();
    console.log(this.listaReceptora.length);
    this.DespachoForm = this.fb.group({
      id_despacho: [''],
      id_solicitud: ['', Validators.required],
      id_repuesto: ['', Validators.required],
      nombre: ['', Validators.required],
    });

  }
  handleError(error) {

    const zone = this.injector.post(NgZone);
    console.log('Here')
    console.log(error)

    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection;
    }
    console.log(error);
    alert('Open console to see the error')
  }
  obtener() {
    this.repuestosService.getAllRepuestos().subscribe(resp => {
      // this.repuestos = resp;
      this.listaEmisora = resp;
      console.log(this.listaEmisora);
    },
      error => { console.error(error) }
    );
  }

  quitar(item) {
    const index = this.listaReceptora.indexOf(item, 0);
    if (index > -1) {
      this.listaReceptora.splice(index, 1);
    }
  }

  agregar(item) {
    if (this.orden != null) {
    this.listaReceptora.push(item);
    }else{
      alert('Debe selecionar una orden');
    }
  }

  private createHeader(contentType: string): any {
    return { headers: new HttpHeaders({ 'Content-Type': contentType }), responseType: 'text' };
  }
  save(): void {
    if (this.listaReceptora.length > 0) {
      if (this.orden != null) {
        this.despacho.ordenReparacion = this.orden;
        this.despacho.repuestos = this.listaReceptora;

        this.despachoRepuestosServices.saveDespacho(this.despacho).subscribe(resp => {
          alert('Repuestos enviados');
          this.listaReceptora = [];
          this.orden = {};
          localStorage.removeItem("orden");
          this.obtener();
        },
        )
      } else {
        alert('No se encontro la orden');
      }
    } else {
      alert('No agrego ningun repuesto');
    }
  }



  public sendEmail(e: Event) {
    alert("Lista de Repuestos enviada a Taller");
    e.preventDefault();
    emailjs.sendForm('service_xsizr7e', 'template_j0rb634', e.target as HTMLFormElement, 'user_lqGZ4MiwwVuENQQwW0pHG')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);

      }

      );
  }

}



