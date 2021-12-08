import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CotizacionService } from '../../services/cotizacion/cotizacion.service';

@Component({
  selector: 'app-generar-cotizacion',
  templateUrl: './generar-cotizacion.component.html',
  styleUrls: ['./generar-cotizacion.component.css']
})
export class GenerarCotizacionComponent implements OnInit {

  cotizacionForm: FormGroup;
  cotizaciones: any;
  

  constructor(
    public fb: FormBuilder,
    public cotizacionService: CotizacionService
  ) {}

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      id_cotizacion: [''],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      modelo: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  guardar(): void{
    this.cotizacionService.saveCotizacion(this.cotizacionForm.value).subscribe(resp =>{
      this.cotizacionForm.reset();
      this.cotizaciones=this.cotizaciones.filter(cotizacion => resp.id!==cotizacion.id);
      this.cotizaciones.push(resp);
    },
      error => {console.error(error)}
    )
  }
}
