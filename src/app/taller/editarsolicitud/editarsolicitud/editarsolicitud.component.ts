import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { solicitudTaller } from 'src/app/models/solicitudTaller';
import  { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';

@Component({
  selector: 'app-editarsolicitud',
  templateUrl: './editarsolicitud.component.html',
  styleUrls: ['./editarsolicitud.component.css']
})
export class EditarsolicitudComponent implements OnInit {

  solicitudTaller: solicitudTaller = new solicitudTaller();
  displayBasic: boolean = false;
  constructor(
    private router:Router,
    private service:SolicitudtallerService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    let cedula=localStorage.getItem("cedula");
    let nombre=localStorage.getItem("nombre");
    let placa=localStorage.getItem("placa");
    this.service.obtenerSolicitudbyId(+id)
    .subscribe(data=>{
      this.solicitudTaller=data;
      this.solicitudTaller.ordenreparacion.cliente.cedula = cedula
      this.solicitudTaller.ordenreparacion.cliente.nombre = nombre
      this.solicitudTaller.ordenreparacion.vehiculo.placa = placa
    })
}
  Actualizar(solicitudTaller:solicitudTaller){
    this.service.Updatesolicitud(solicitudTaller)
    .subscribe(data=>{
      this.solicitudTaller=data;
      alert("Solicitud actualizada");
      this.router.navigate(["listasolicitud"]);
    })
  }
}