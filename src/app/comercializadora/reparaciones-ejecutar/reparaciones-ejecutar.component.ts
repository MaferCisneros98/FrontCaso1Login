import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReparacionesEjecutarService } from 'src/app/services/reparacionesEjecutar/reparaciones-ejecutar.service';
import emailjs, {EmailJSResponseStatus}from 'emailjs-com';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reparaciones-ejecutar',
  templateUrl: './reparaciones-ejecutar.component.html',
  styleUrls: ['./reparaciones-ejecutar.component.css']
})
export class ReparacionesEjecutarComponent implements OnInit {
  informeForm: FormGroup;
  informes:any={};
reclamos: any;
reclamo:any={};
contenido: any='';
  constructor(
    public fb: FormBuilder,
    public reparacionesEjecutarService: ReparacionesEjecutarService,
    public reclamoService: ReclamosService,
    private router: Router
  ) {
    this.reclamo.reclamo={};
   }

  ngOnInit() {
    this.reclamo={};
    this.informeForm = this.fb.group({
      id_informe: [''],
      id_cliente:[''],
      id_reclamo:[''],
      nombre: [''],
      apellido: [''],
      user_email: [''],
      contenido: [''],
      placa: [''],
     

    });
    this.listarEstado();
  }
  public listarEstado(){
    this.reclamoService.listarPorEstado(2).subscribe(data=>{
console.log(data);

this.reclamos=data;
    });
  }
public sendEmail(e: Event){
  e.preventDefault();
 

  emailjs.sendForm('service_kgs1ylm','template_aa0ns5r',e.target as HTMLFormElement, 'user_VjTiHaAoi53UW8XWtkmUO')
  
  .then((result:EmailJSResponseStatus)=>{
    this.informeForm.reset();
    console.log(result.text);


  },(error)=> {
console.log(error.text);

  }
  );
}
guardar(): void{
  this.informes.reclamo= this.reclamo.reclamo;
  this.informes.contenido = this.contenido;
  this.reparacionesEjecutarService.saveInformeC(this.informes).subscribe(resp =>{
  
    //this.informes=this.informes.filter(informe => resp.id!==informe.id);
   // this.informes.push(resp);
   this.router.navigate(['/ordenR']);
  },
  error => {console.error(error)}
  
  )
  alert("Informe Guardado");
 }
 

}