import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepuestosService } from '../../services/repuestos/repuestos.service';
@Component({
  selector: 'app-crear-repuestos',
  templateUrl: './crear-repuestos.component.html',
  styleUrls: ['./crear-repuestos.component.css']
})
export class CrearRepuestosComponent implements OnInit {

  repuestosForm: FormGroup;
  repuestos:any;
 
  constructor(
    public fb: FormBuilder,
    public repuestoService: RepuestosService
  ) { }

  ngOnInit() :void {
    this.repuestosForm = this.fb.group({
      id_repuesto: [''],
      materiales: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],

    });
  }

  guardar(): void{
    this.repuestoService.saveRepuestos(this.repuestosForm.value).subscribe(resp =>{
      this.repuestosForm.reset();
      this.repuestos=this.repuestos.filter(repuesto => resp.id!==repuesto.id);
      this.repuestos.push(resp);
    
    },
    error => {console.error(error)}
    
    )
    alert("repuesto  Agregado");
   }
}
