import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';

@Component({
  selector: 'app-lista-cotizaciones',
  templateUrl: './lista-cotizaciones.component.html',
  styleUrls: ['./lista-cotizaciones.component.css']
})
export class ListaCotizacionesComponent implements OnInit {

  cotizacionForm: FormGroup;
  cotizaciones: any;
  hola:any;

  constructor(
    public fb: FormBuilder,
    public cotizacionService: CotizacionService 
  ) {}

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      id_cotizacion: [''],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      modelo: ['', Validators.required],
      estado: ['', Validators.required],
    });;

    this.cotizacionService.getAllCotizaciones().subscribe(resp =>{
      this.cotizaciones = resp;
    },
     error => {console.error(error)}
    );
  }

}
