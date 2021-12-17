import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Garantia } from '../../models/Garantia';
import { Solicitudes } from '../../services/solicitudes/solicitudes.service';
import { Cliente } from '../../models/Cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamosService } from '../../services/reclamos/reclamos.service';


@Component({
  selector: 'app-generar-reclamo',
  templateUrl: './generar-reclamo.component.html',
  styleUrls: ['./generar-reclamo.component.css']
})
export class GenerarReclamoComponent implements OnInit {

  reclamoForm: FormGroup;
  reclamos:any;
  garantia: Garantia;
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
    console.log(this.garantia)
    this.reclamoForm  = this.fb.group({
      id_garantia: ['', Validators.required],
      id_cliente: ['', Validators.required],
      tiempo: ['', Validators.required],
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
      this.garantia=res;
      this.reclamoForm  = this.fb.group({
        id_garantia: [this.garantia.id_garantia, Validators.required],
        id_cliente: [this.garantia.cliente.id_cliente, Validators.required],
        tiempo: [this.garantia.tiempo, Validators.required],
        motivo: [this.garantia.motivo, Validators.required],
        placa: [this.garantia.vehiculo.placa, Validators.required],
        numero_chasis: [this.garantia.vehiculo.numero_chasis, Validators.required],
        marca: [this.garantia.vehiculo.marca, Validators.required],
        color: [this.garantia.vehiculo.color, Validators.required],
        modelo: [this.garantia.vehiculo.modelo, Validators.required],
      });
      //console.log(res)
      //console.log(this.garantia)
    }
    )}

  Cargar(){
    let id=localStorage.getItem("id");
    this.servicesoli.getGarantiaId(+id)
    .subscribe(data=>{
      this.garantia=data;
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

