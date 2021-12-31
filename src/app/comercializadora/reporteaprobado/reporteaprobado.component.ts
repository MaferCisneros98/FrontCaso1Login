import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf, { jsPDF } from 'jspdf';
import { Reclamo } from 'src/app/models/Reclamo';
import { ReclamosService } from 'src/app/services/reclamos/reclamos.service';

@Component({
  selector: 'app-reporteaprobado',
  templateUrl: './reporteaprobado.component.html',
  styleUrls: ['./reporteaprobado.component.css']
})
export class ReporteaprobadoComponent implements OnInit {

  reclamos: Reclamo[];

  constructor(
    private reclamoService: ReclamosService,
    private router: Router,
  ) { }
  capturarContenido() {
    var data = document.getElementById('contenidoAConvertir');
    html2canvas(data).then(canvas => {

      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.save('InformeConcesionaria.pdf')
    });
  }
  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_InformeConcesionaria.pdf`);
    });
  }
  ngOnInit() {
    this.cargarReclamoAprobado();

  }

  cargarReclamoAprobado(): void {
    this.reclamoService.lista().subscribe(
      data => {
        this.reclamos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}