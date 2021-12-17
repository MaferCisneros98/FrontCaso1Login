import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repuestos } from '../models/repuestos';
import { RepuestosService } from '../services/repuestos/repuestos.service';

@Component({
  selector: 'app-editar-repuesto',
  templateUrl: './editar-repuesto.component.html',
  styleUrls: ['./editar-repuesto.component.css']
})
export class EditarRepuestoComponent implements OnInit {

  repuesto: Repuestos = new Repuestos;
  
  constructor(
    private router:Router,
    private service:RepuestosService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getRepuestoId(+id)
    .subscribe(data=>{
      this.repuesto=data;
     } )
   
    
  }

  Actualizar(repuesto:Repuestos){
    this.service.UpdateRepuesto(repuesto)
    .subscribe(data=>{
      this.repuesto=data;
      alert("repuesto actualizado");
      this.router.navigate(["listarR"]);
    })
  }

}
