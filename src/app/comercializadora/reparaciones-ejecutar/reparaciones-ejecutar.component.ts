import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReparacionesEjecutarService } from 'src/app/services/reparacionesEjecutar/reparaciones-ejecutar.service';
import emailjs, {EmailJSResponseStatus}from 'emailjs-com';

@Component({
  selector: 'app-reparaciones-ejecutar',
  templateUrl: './reparaciones-ejecutar.component.html',
  styleUrls: ['./reparaciones-ejecutar.component.css']
})
export class ReparacionesEjecutarComponent implements OnInit {
  informeForm: FormGroup;
  informes:any;


  constructor(
    public fb: FormBuilder,
    public reparacionesEjecutarService: ReparacionesEjecutarService
  ) { }

  ngOnInit() {
    this.informeForm = this.fb.group({
      id_informe: [''],
      id_cliente:['', Validators.required],
      contenido: ['', Validators.required],
      placa: ['', Validators.required],
     

    });
  }
public sendEmail(e: Event){
  e.preventDefault();

  emailjs.sendForm('service_e24743a','template_rzk5o39',e.target as HTMLFormElement, 'user_c9o02iLdgvLwYyARv3g7J')
  
  .then((result:EmailJSResponseStatus)=>{
    this.informeForm.reset();
    console.log(result.text);


  },(error)=> {
console.log(error.text);

  }
  );
}
guardar(): void{
  this.reparacionesEjecutarService.saveInformeC(this.informeForm.value).subscribe(resp =>{
    this.informeForm.reset();
    this.informes=this.informes.filter(informe => resp.id!==informe.id);
    this.informes.push(resp);
  
  },
  error => {console.error(error)}
  
  )
  alert("Informe Guardado");
 }

}
