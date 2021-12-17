import { Component, OnInit, Output } from '@angular/core';
import { Repuestos } from 'src/app/models/repuestos';
import { RepuestosService } from 'src/app/services/repuestos/repuestos.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BuscarRepuestosPipe } from 'src/app/pipes/buscar-repuestos.pipe';
import { EventEmitter } from 'protractor';
import emailjs, {EmailJSResponseStatus}from 'emailjs-com';
@Component({
  selector: 'app-despacho-repuestos',
  templateUrl: './despacho-repuestos.component.html',
  styleUrls: ['./despacho-repuestos.component.css']
})
export class DespachoRepuestosComponent implements OnInit {
  repuestos: any;
  repuesto:Repuestos[];
  listaReceptora: Repuestos[];
  listaEmisora: any;  

  constructor(
    
      public fb: FormBuilder, 
      public repuestosService : RepuestosService,
      private router:Router
    ) { 
      this.listaReceptora = [];
    }
 
    filterPost='';

  ngOnInit() {
    this.obtener();
    console.log(this.listaReceptora.length);
  }
  
  obtener(){
    this.repuestosService.getAllRepuestos().subscribe(resp =>{
      // this.repuestos = resp;
      this.listaEmisora = resp;
      console.log(this.listaEmisora);
    },
     error => {console.error(error)}
    );
  }

  quitar(item){
    const index = this.listaReceptora.indexOf(item, 0);
if (index > -1) {
  this.listaReceptora.splice(index, 1);
}
  }

  agregar(item){
    this.listaReceptora.push(item);
    console.log(this.listaReceptora);
    // this.obtener();

console.log(item);
  }
  public sendEmail(e: Event){
    e.preventDefault();
  
    emailjs.sendForm('service_e24743a','template_rzk5o39',e.target as HTMLFormElement, 'user_c9o02iLdgvLwYyARv3g7J')
    
    .then((result:EmailJSResponseStatus)=>{
      this.listaReceptora.splice;
      console.log(result.text);
  
  
    },(error)=> {
  console.log(error.text);
  
    }
    );
  }

}
