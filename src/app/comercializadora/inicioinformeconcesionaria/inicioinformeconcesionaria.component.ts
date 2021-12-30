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
  selector: 'app-inicioinformeconcesionaria',
  templateUrl: './inicioinformeconcesionaria.component.html',
  styleUrls: ['./inicioinformeconcesionaria.component.css']
})
export class InicioinformeconcesionariaComponent implements OnInit {

  clientes: any;
  personaForm: FormGroup;
  informes: informeTaller[];
  cliente: Cliente[];
  informe: informeTaller;
  productos: Producto[] = [];
  roles: string[];
  isComercializadora = false;

  public num1: number;
  public num2: number;
  public num3: number;
  public num4: number;


  porcentaje() {
    this.num3 = (this.num1 * this.num2) / 100;
  }
  total() {
    this.num4 = (this.num1 - this.num3);
  }

  

  constructor(private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    public informeService: InformetallerService,
    private router: Router) { }

  Venta(cliente: Cliente): void {
    localStorage.setItem("id", cliente.id_cliente.toString());
    this.router.navigate(["venta"]);
  }

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
    this.suscribir();
  }

  displayBasic: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_sd6en4k', 'template_1nc74yn', e.target as HTMLFormElement, 'user_IvU8IS2fzIeqIl279WKE5'
    )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  showDialog() {
    this.displayBasic = true;
  }

  cargarInformeOrden(idOrden: number): void {
    this.informeService.obtenerInformebyId(idOrden).subscribe(
      data => {
        this.informe = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  verInformeOrden(informes: informeTaller): void {
    console.log('Dato enviado--> ' + informes.id_InformeTaller);
    localStorage.setItem("idInformeTaller", informes.id_InformeTaller.toString());
    this.router.navigate(["inicioinformeconcesionaria"]);

  }

  suscribir(): void {
    console.log('Ingresa a llamar cargar Orden Informe');
    let id = localStorage.getItem("idInformeTaller");
    console.log('Id... >' + id);
    const that = this;
    this.cargarInformeOrden(Number(id));

  }
}
