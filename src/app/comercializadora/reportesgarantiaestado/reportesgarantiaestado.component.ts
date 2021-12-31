import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamo } from 'src/app/models/Reclamo';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-reportesgarantiaestado',
  templateUrl: './reportesgarantiaestado.component.html',
  styleUrls: ['./reportesgarantiaestado.component.css']
})
export class ReportesgarantiaestadoComponent implements OnInit {

  reclamos: Reclamo[];

  constructor(
    private reclamoService: ReclamosService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.cargarReclamoA();

  }

  cargarReclamoA(): void {
    this.reclamoService.listaA().subscribe(
      data => {
        this.reclamos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarReclamoD(): void {
    this.reclamoService.listaD().subscribe(
      data => {
        this.reclamos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  verReclamo(reclamos:Reclamo):void{
    console.log('Dato enviado--> ' + reclamos.id_reclamo);
    localStorage.setItem("idReclamo", reclamos.id_reclamo.toString());
    this.router.navigate(["reporteaprobado"]);

  }


}
