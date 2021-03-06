import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { informeTaller } from 'src/app/models/informeTaller';
import { InformetallerService } from 'src/app/services/informetaller/informetaller.service';

@Component({
  selector: 'app-listarinforme',
  templateUrl: './listarinforme.component.html',
  styleUrls: ['./listarinforme.component.css']
})
export class ListarinformeComponent implements OnInit {
  informes: informeTaller[];
  constructor(
    public informeService: InformetallerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.informeService.obtenerInforme().subscribe(resp => {
      this.informes = resp;    
    });
  }

  Editar(informe: informeTaller): void {
    localStorage.setItem("id", informe.id_informetaller.toString());
    
    this.router.navigate(["editarInforme"]);
  }

}