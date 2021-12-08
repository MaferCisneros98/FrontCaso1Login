import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VehiculosService } from '../services/vehiculos/vehiculos.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  vehiculos: any;

  constructor(
    public fb: FormBuilder,
    public vehiculosService : VehiculosService
  ) { }

  ngOnInit(): void {

    
    this.vehiculosService.getAllVehiculos().subscribe(resp =>{
      this.vehiculos = resp;
    },
     error => {console.error(error)}
    );
  }
}
