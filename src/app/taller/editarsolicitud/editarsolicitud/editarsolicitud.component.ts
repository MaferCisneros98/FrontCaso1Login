import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { solicitudTaller } from 'src/app/models/solicitudTaller';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';

@Component({
  selector: 'app-editarsolicitud',
  templateUrl: './editarsolicitud.component.html',
  styleUrls: ['./editarsolicitud.component.css']
})
export class EditarsolicitudComponent implements OnInit {

  solicitudTaller: solicitudTaller = new solicitudTaller();
  
  constructor(
    private router:Router,
    private service:SolicitudtallerService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.obtenerSolicitudbyId(+id)
    .subscribe(data=>{
      this.solicitudTaller=data;
    })
}

  Actualizar(solicitudTaller:solicitudTaller){
    this.service.Updatesolicitud(solicitudTaller)
    .subscribe(data=>{
      this.solicitudTaller=data;
      alert("Solicitud actualizada");
      this.router.navigate(["listarsolicitud"]);
    })
  }

}