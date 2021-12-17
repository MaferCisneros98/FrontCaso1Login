import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  
  constructor(
    private router:Router,
    private service:ClientesService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }

  Actualizar(cliente:Cliente){
    this.service.UpdateCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("cliente actualizado");
      this.router.navigate(["listarclientes"]);
    })
  }

}
