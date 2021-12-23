import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { informeTaller } from 'src/app/models/informeTaller';
import { InformetallerService } from 'src/app/services/Informetaller/informetaller.service';

@Component({
  selector: 'app-editarinforme',
  templateUrl: './editarinforme.component.html',
  styleUrls: ['./editarinforme.component.css']
})
export class EditarinformeComponent implements OnInit {
  informeTaller = new informeTaller();
  
  constructor(
    private router:Router,
    private service:InformetallerService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.obtenerInformebyId(+id)
    .subscribe(data=>{
      this.informeTaller=data;
    })
}
  Actualizar(informeTaller:informeTaller){
    this.service.UpdateInforme(informeTaller)
    .subscribe(data=>{
      this.informeTaller=data;
      alert("Informe actualizado");
      this.router.navigate(["listar"]);
    })
  }

}
