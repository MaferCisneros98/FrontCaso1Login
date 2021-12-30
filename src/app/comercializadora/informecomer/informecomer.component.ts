import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';
import jsPDF from 'jspdf';
import jspdf, * as JSPdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
//correo
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Cliente } from 'src/app/models/Cliente';
import { FormGroup } from '@angular/forms';
import { Reclamo } from 'src/app/models/Reclamo';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';
import { InformetallerService } from 'src/app/services/informetaller/informetaller.service';
import { informeTaller } from 'src/app/models/informeTaller';

@Component({
  selector: 'app-informecomer',
  templateUrl: './informecomer.component.html',
  styleUrls: ['./informecomer.component.css']
})
export class InformecomerComponent implements OnInit {

  clientes: any;
  personaForm:FormGroup;
  informes: informeTaller[];
  cliente:Cliente[];
  productos: Producto[] = [];
  roles: string[];
  isComercializadora = false;

  constructor(private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    public informeService: InformetallerService,
    private router: Router) { }

    
  ngOnInit() { 
    this.cargarInformeOrden();
  }

  cargarInformeOrden(): void {
    this.informeService.obtenerInforme().subscribe(
      data => {
        this.informes = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  verInformeOrden(informes:informeTaller):void{
    console.log('Dato enviado--> ' + informes.id_InformeTaller);
    localStorage.setItem("idInformeTaller", informes.id_InformeTaller.toString());
    this.router.navigate(["inicioinformeconcesionaria"]);

  }
}
