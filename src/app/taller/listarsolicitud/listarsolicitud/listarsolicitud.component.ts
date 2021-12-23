import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { solicitudTaller } from 'src/app/models/solicitudTaller';
import { SolicitudtallerService } from 'src/app/services/solicitudtaller/solicitudtaller.service';

@Component({
  selector: 'app-listarsolicitud',
  templateUrl: './listarsolicitud.component.html',
  styleUrls: ['./listarsolicitud.component.css']
})
export class ListarsolicitudComponent implements OnInit {
  listasolicitudForm:FormGroup;
  solicitudes: any;
  solicitud:solicitudTaller[];
    constructor(
      public fb :FormBuilder,
      public solicitudService: SolicitudtallerService,
      private router:Router
    ) { }
  
    ngOnInit(): void {
     
    this.solicitudService.obtenerSolicitud().subscribe(resp=>{
      this.solicitudes=resp;},
error =>{console.error(error)
    });
    }
    Editar(solicitud:solicitudTaller):void{
      localStorage.setItem("id",solicitud.id_solicitud.toString());
    this.router.navigate(["editarSolicitud"]);
    }
  
  }