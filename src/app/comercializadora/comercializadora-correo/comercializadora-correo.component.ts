import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comercializadora-correo',
  templateUrl: './comercializadora-correo.component.html',
  styleUrls: ['./comercializadora-correo.component.css']
})
export class ComercializadoraCorreoComponent implements OnInit {
  public num1:number;
  public num2:number;
  public num3:number;
  http: any;

  suma(){ 
    this.num3=this.num1+this.num2;
  }
  porcentaje(){ 
    this.num3=(this.num1*this.num2)/100;
  }


  constructor() { }

  ngOnInit() {
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
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

 

  sendEmail() {
    return this.http.post('https://mandrillapp.com/api/1.0/messages/send.json',
      {
          key: 'API KEY',
          message: {
          html: '<p>Example HTML content</p>',
          subject: 'example subject',
          from_email: 'message.from_email@example.com',
          from_name: 'Example Name',
          to: [
            {
              email: 'recipient.email@example.com',
              name: 'Recipient Name',
              type: 'to'
            }
          ],
          headers: {
            'Reply-To': 'message.reply@example.com'
          }
        }

      });
  }

  

}
