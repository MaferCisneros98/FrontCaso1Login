import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaCabecera } from 'src/app/models/FacturaCabecera';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { OrdenReparacionService } from 'src/app/services/ordenReparacion/orden-reparacion.service';
@Component({
  selector: 'app-listar-orden',
  templateUrl: './listar-orden.component.html',
  styleUrls: ['./listar-orden.component.css']
})
export class ListarOrdenComponent implements OnInit {
  orden: any;
  personaForm:FormGroup
  factura:FacturaCabecera[];
  constructor(
    public fb: FormBuilder, 
    public ordenService : OrdenReparacionService,
 public clienteService : ClientesService,
    private router: Router
  ) { }

  filterPost='';
  ngOnInit() {
    
    this.obtener();

}
obtener(){
  this.ordenService.getAllOrdenR().subscribe(resp =>{
    this.orden = resp;
    console.log  (this.orden);
  
  },
   error => {console.error(error)}
  );
}
enviar(item:any){
  localStorage.setItem('orden',JSON.stringify(item));
  this.router.navigate(['/despacho']);
}


  }