import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Repuestos } from 'src/app/models/repuestos';
import { RepuestosService } from 'src/app/services/repuestos/repuestos.service';
import { BuscarRepuestosPipe } from 'src/app/pipes/buscar-repuestos.pipe';
@Component({
  selector: 'app-lista-repuestos',
  templateUrl: './lista-repuestos.component.html',
  styleUrls: ['./lista-repuestos.component.css']
})
export class ListaRepuestosComponent implements OnInit {
  repuestos: any;
  repuesto:Repuestos[];
  filtroRepuesto:'';

  constructor(
    public fb: FormBuilder, 
    public repuestosService : RepuestosService,
    private router:Router
  ) { }

  ngOnInit(): void  {
    this.obtener();
  }
 
  filterPost='';

  obtener(){
    this.repuestosService.getAllRepuestos().subscribe(resp =>{
      this.repuestos = resp;
      console.log(this.repuestos);
    },
     error => {console.error(error)}
    );
  }
  Editar(repuesto:Repuestos):void{
    localStorage.setItem("id", repuesto.id_repuesto.toString());
    this.router.navigate(["editarR"]);
  }
  Eliminar(id){
    console.log(id);
    this.repuestosService.deleteRepuesto(id).subscribe(resp =>{
      console.log(resp);
      this.obtener();
      // if (resp===true) {
        // console.log(resp);
        // this.repuestos.pop(repuesto)
        // this.repuestos.splice(repuesto.lenght)
        
      // }
      alert("repuesto Eliminado");
     
    })
  }

}