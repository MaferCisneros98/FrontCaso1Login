import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitudes } from '../../services/solicitudes/solicitudes.service';
import { Garantia } from '../../models/Garantia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-garantias',
  templateUrl: './listado-garantias.component.html',
  styleUrls: ['./listado-garantias.component.css']
})
export class ListadoGarantiasComponent implements OnInit {

  listadoForm: FormGroup;
  garantias: any;

  constructor(
    public fb: FormBuilder,
    public solicitudeService: Solicitudes,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listadoForm = this.fb.group({
      id_garantia: ['', Validators.required],
      id_cliente: ['', Validators.required],
      motivo: ['', Validators.required],
      nombre: ['', Validators.required],
    });;
    this.solicitudeService.getAllSolicitudes().subscribe(resp =>{
      this.garantias = resp;
      console.log(this.garantias);
    },
     error => {console.error(error)}
    );
  }

  CargarDatos(garantia: Garantia):void{
    localStorage.setItem("id", garantia.id_garantia.toString());
    this.router.navigate(["/generar-reclamo", garantia.id_garantia]);
  }

}