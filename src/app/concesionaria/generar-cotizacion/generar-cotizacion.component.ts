import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import emailjs,{ EmailJSResponseStatus } from "emailjs-com";

import { CotizacionService } from "../../services/cotizacion/cotizacion.service";
import { VehiculosService } from '../../services/vehiculos/vehiculos.service';
import { Vehiculo } from '../../models/Vehiculo';
import { Router } from '@angular/router';

@Component({
  selector: "app-generar-cotizacion",
  templateUrl: "./generar-cotizacion.component.html",
  styleUrls: ["./generar-cotizacion.component.css"],
})
export class GenerarCotizacionComponent implements OnInit {
  cotizacionForm: FormGroup;
  cotizaciones: any;
  vehiculo:any;
  vehiculoForm: FormGroup;
  vehiculoObjeto: Vehiculo;
  

  constructor(
    public fb: FormBuilder,
    public cotizacionService: CotizacionService,
    public vehiculoService: VehiculosService,
    private router: Router
  ) {}

  displayBasic: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm("service_bj6m0t3","template_52kreyf", e.target as HTMLFormElement,"user_Kfkhy8iG0pw81DDW1sSiZ"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  ngOnInit(): void {
    
    this.cotizacionForm = this.fb.group({
      id_cotizacion: [""],
      cedula: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      correo: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],
      vehiculo: ["",Validators.required],
      
    });

    this.vehiculoService.getAllVehiculos().subscribe(resp => {
      this.vehiculo = resp;
    },
    error => { console.error(error)}
    )
  }
 
  guardar(): void {
    this.cotizacionService.saveCotizacion(this.cotizacionForm.value).subscribe(
      (resp) => {
        this.cotizacionForm.reset();
        
       
      },
      (error) => {
        console.error(error);
      }
    );
  }

 
  /*
  CargarDatos(placa){
    console.log(placa);
    this.vehiculoService.getVehiculoId(placa).subscribe(resp=>{
      this.vehiculoObjeto = resp;
      this.cotizacionForm = this.fb.group({
        marca: [this.vehiculoObjeto.marca, Validators.required]
      });
      
    }

    )}*/

  get cedula(){return this.cotizacionForm.get('cedula');}
  get nombre(){return this.cotizacionForm.get('nombre');}
  get apellido(){return this.cotizacionForm.get('apellido');}
}