import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Solicitudes } from '../../services/solicitudes/solicitudes.service';
import { Cliente } from '../../models/Cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamosService } from '../../services/reclamos/reclamos.service';
import { SolicitudGarantia } from 'src/app/models/SolicitudGarantia';


@Component({
  selector: 'app-generar-reclamo',
  templateUrl: './generar-reclamo.component.html',
  styleUrls: ['./generar-reclamo.component.css']
})
export class GenerarReclamoComponent implements OnInit {

  reclamoForm: FormGroup;
  reclamos:any;
  solicitudgarantia: SolicitudGarantia;
  cliente: Cliente = new Cliente();
  url:any;
  //servicesoli:Solicitudes

  constructor(
    public fb: FormBuilder,
    public solicitudesService: Solicitudes,
    public reclamosService: ReclamosService,
    private router:Router,
    private route:ActivatedRoute,
    private servicesoli: Solicitudes
    
  ) {
    /*let id = this.route.snapshot.paramMap.get("garantia")
    servicesoli.getGarantiaId(id).subscribe(res=>{
        this.garantia=res;
        console.log(this.garantia)
    
    })*/}

   

  ngOnInit():void {
    this.envio()
    //this.Cargar()
    console.log(this.solicitudgarantia)
    this.reclamoForm  = this.fb.group({
      id_garantia: ['', Validators.required],
      id_cliente: ['', Validators.required],
      nombre: ['', Validators.required],
      motivo: ['', Validators.required],
      placa: ['', Validators.required],
      numero_chasis: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
      modelo: ['', Validators.required],
    });
  }

  

  envio(){
    let id = this.route.snapshot.paramMap.get("garantia")
    this.servicesoli.getGarantiaId(id).subscribe(res=>{
      this.solicitudgarantia=res;
      this.reclamoForm  = this.fb.group({
        id_garantia: [this.solicitudgarantia.id_solicitudgarantia, Validators.required],
        id_cliente: [this.solicitudgarantia.cliente.id_cliente, Validators.required],
        nombre: [this.solicitudgarantia.cliente.nombre, Validators.required],
        motivo: [this.solicitudgarantia.motivo, Validators.required],
        placa: [this.solicitudgarantia.vehiculo.placa, Validators.required],
        numero_chasis: [this.solicitudgarantia.vehiculo.numero_chasis, Validators.required],
        marca: [this.solicitudgarantia.vehiculo.marca, Validators.required],
        color: [this.solicitudgarantia.vehiculo.color, Validators.required],
        modelo: [this.solicitudgarantia.vehiculo.modelo, Validators.required],
      });
      //console.log(res)
      //console.log(this.garantia)
    }
    )}

  Cargar(){
    let id=localStorage.getItem("id");
    this.servicesoli.getGarantiaId(+id)
    .subscribe(data=>{
      this.solicitudgarantia=data;
    })
  }

  guardar(): void{
    this.reclamosService.saveReclmamos(this.reclamoForm.value).subscribe(resp =>{
      alert("reclamo guardado");
      this.reclamoForm.reset();
      this.router.navigate(["listar-garantias"]);
      //console.log(this.reclamoForm.value);
    },
      error => {console.error(error)}
    )
  }
}

