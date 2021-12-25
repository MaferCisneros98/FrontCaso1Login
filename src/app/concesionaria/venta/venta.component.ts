import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import jspdf, * as JSPdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes/clientes.service';
import { VehiculosService } from '../../services/vehiculos/vehiculos.service';
import { FacturaService } from '../../services/factura/factura.service';
import { FacturaCuerpo } from '../../models/FacturaCuerpo';
import { DetalleService } from '../../services/detalle/detalle.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  cliente: Cliente = new Cliente();

  cargar: boolean = false;
  factura: any = { detalleList: [] };
  vehiculo: any;
  producto:any;
  iva: number;
  suma: number;
  placaVehiculo:any;
  dato:any;
  fecha:Date;

  
  constructor(
    private http: HttpClient,
    private service:ClientesService,
    private vehiculos: VehiculosService,
    public Cuerpo :DetalleService,
    ) { }

  ngOnInit(): void {
    this.agregarPorducto();
    this.recuperarDatos();

    this.vehiculos.getAllVehiculos().subscribe(resp =>{
      this.vehiculo = resp;
    },
    error => { console.error(error)}
    )
  }


  comprabarPlaca(){

    this.Cuerpo.buscarPlaca("54254")
    .subscribe(data => {
        this.placaVehiculo = data;
        console.log(this.placaVehiculo);
      
    })
  }


  /*Metodo para traer datos*/
  recuperarDatos(){
    let id=localStorage.getItem("id");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })

  }

  sumar(){
   
    this.factura.total = 0;
    this.iva = this.factura.detalleList[0].subtotal * 12 /100;
    this.suma = (Number(this.factura.detalleList[0].subtotal) + Number(this.iva));
    this.factura.total=this.suma;
    // this.factura.iva= this.iva;
    console.log(this.suma)

  }


  consultar() {
    location.href = 'listarclientes';
  }

  agregarPorducto() {
    this.factura.detalleList.push({});
  }

  guardar(){
    
    let formulario: any = document.getElementById('formulario');
    if (formulario.reportValidity()) {
      this.cargar = true;
      this.factura.cliente=this.cliente;
      console.log('guardar feccha '+this.factura.fecha);
      //this.factura.fecha = this.fecha;
      /*
      for (let i = 0; i < this.factura.detalleList.length; i++) {
        this.factura.total += this.factura.detalleList[i].subtotal;
      }*/
      this.servicioGuardar().subscribe(
        (response:any) => this.resultadoServicio(response)
      )
    }

  }


  


  resultadoServicio(res : any){
    this.cargar = true;
    //this.factura = {detalleList:[]};
    //this.agregarPorducto();
    alert("factura guardada con id: "+res.id_factura);
  }

  servicioGuardar() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http
      .post<any>(
        'http://localhost:8080/facturacuerpo/guardar',this.factura,httpOptions)
      .pipe(catchError((e) => 'error'));
  }



  eliminar(producto: any) {
    this.factura.detalleList.splice(
      this.factura.detalleList.indexOf(producto),1);
  }

  


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

  

}


