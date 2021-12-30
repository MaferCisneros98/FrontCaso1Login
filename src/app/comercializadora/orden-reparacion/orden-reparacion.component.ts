import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenReparacionService } from 'src/app/services/ordenReparacion/orden-reparacion.service';
import emailjs, {EmailJSResponseStatus}from 'emailjs-com';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteDto } from 'src/app/models/interface/ClienteDto';
@Component({
  selector: 'app-orden-reparacion',
  templateUrl: './orden-reparacion.component.html',
  styleUrls: ['./orden-reparacion.component.css']
})
export class OrdenReparacionComponent implements OnInit {
  OrdenForm: FormGroup;
  orden:any={};
  ordenes: any;
  facura:FacturaCabecera[];
  cliente: any = {};
cedula: string='';
placa: string = '';
 
  constructor(
    public fb: FormBuilder,
    public ordenReparacionService: OrdenReparacionService,
     private factura: FacturaService,
     private clienteService: ClientesService,
    private router: Router
  ) {  this.cliente={};
  this.cliente.placas=[];
  this.cliente.cliente={};
  this.cliente.cliente.cedula='';

}

  ngOnInit() {
    this.cliente={};
    this.cliente.placas=[];
    this.cliente.cliente={};
    this.OrdenForm = this.fb.group({
      id_orden: [''],
     cedula: [''],
     nombre: [''],
     apellido: [''],
   
     facturaCabecera: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
    this.obtenerOrdenes();
   
  
  }

public sendEmail(e: Event){
  e.preventDefault();

  emailjs.sendForm('service_e24743a','template_3ryzd2l',e.target as HTMLFormElement, 'user_c9o02iLdgvLwYyARv3g7J')
  
  .then((result:EmailJSResponseStatus)=>{
    this.OrdenForm.reset();
    console.log(result.text);


  },(error)=> {
console.log(error.text);

  }
  );
}

guardar(): void{
  this.orden.cliente = this.cliente.cliente;
  this.orden.vehiculo ={};
  this.orden.vehiculo.placa = this.placa; 
  console.log (this.orden);
this.ordenReparacionService.saveordenR(this.orden).subscribe(resp=>{
  this.router.navigate(['/lista-orden']);
},
error => {alert(error.error)}
)
 }

 buscarCliente(){

this.clienteService.getVehiculos(this.cedula).subscribe(data=>{

this.cliente= data;
console.log(data);
})
 }
 obtenerOrdenes(){
   this.factura.getAllFactura().subscribe(data=>{console.log(data,"Datos de Factura")})
 }
 
}