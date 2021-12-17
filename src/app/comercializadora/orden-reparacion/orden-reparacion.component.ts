import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenReparacionService } from 'src/app/services/ordenReparacion/orden-reparacion.service';
import emailjs, {EmailJSResponseStatus}from 'emailjs-com';
@Component({
  selector: 'app-orden-reparacion',
  templateUrl: './orden-reparacion.component.html',
  styleUrls: ['./orden-reparacion.component.css']
})
export class OrdenReparacionComponent implements OnInit {
  OrdenForm: FormGroup;
  orden:any;

  constructor(
    public fb: FormBuilder,
    public ordenReparacionService: OrdenReparacionService
  ) { }

  ngOnInit() {
    this.OrdenForm = this.fb.group({
      id_orden: ['', Validators.required],
      id_cliente:['', Validators.required],
      descripcion: ['', Validators.required],
    });
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
  this.ordenReparacionService.saveordenR(this.OrdenForm.value).subscribe(resp =>{
    this.OrdenForm.reset();
    this.orden=this.orden.filter(orden => resp.id!==orden.id);
    this.orden.push(resp);
  
  },
  error => {console.error(error)}
  
  )
  alert("Orden Enviada");
 }

}
