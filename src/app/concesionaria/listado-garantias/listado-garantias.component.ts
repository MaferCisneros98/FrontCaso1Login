import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitudes } from '../../services/solicitudes/solicitudes.service';

import { Router } from '@angular/router';
import { SolicitudGarantia } from 'src/app/models/SolicitudGarantia';

@Component({
  selector: 'app-listado-garantias',
  templateUrl: './listado-garantias.component.html',
  styleUrls: ['./listado-garantias.component.css']
})
export class ListadoGarantiasComponent implements OnInit {

  listadoForm: FormGroup;
  solicitudgarantias: any;

  constructor(
    public fb: FormBuilder,
    public solicitudeService: Solicitudes,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listadoForm = this.fb.group({
      id_solicitudgarantia: ['', Validators.required],
      id_cliente: ['', Validators.required],
      motivo: ['', Validators.required],
      nombre: ['', Validators.required],
    });;
    this.solicitudeService.getAllSolicitudes().subscribe(resp =>{
      this.solicitudgarantias = resp;
      console.log(this.solicitudgarantias);
    },
     error => {console.error(error)}
    );
  }

  CargarDatos(solicitudgarantia: SolicitudGarantia):void{
    localStorage.setItem("id", solicitudgarantia.id_solicitudgarantia.toString());
    this.router.navigate(["/generar-reclamo", solicitudgarantia.id_solicitudgarantia]);
  }

}