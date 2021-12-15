import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';
import jsPDF from 'jspdf';
import jspdf, * as JSPdf from 'jspdf'; 
import html2canvas from 'html2canvas';
//correo
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-informecomer',
  templateUrl: './informecomer.component.html',
  styleUrls: ['./informecomer.component.css']
})
export class InformecomerComponent implements OnInit {

  public num1:number;
  public num2:number;
  public num3:number;
  public num4:number;


  porcentaje(){ 
    this.num3=(this.num1*this.num2)/100;
  }
  total(){ 
    this.num4=(this.num1-this.num3);
  }

  productos: Producto[] = [];
  roles: string[];
  isComercializadora = false;

  constructor(private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

    
    capturarContenido(){
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
}
