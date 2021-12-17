import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../../services/clientes/clientes.service';
import { Cliente } from '../../models/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: any;
  personaForm:FormGroup
  cliente:Cliente[];

  constructor(
    public fb: FormBuilder, 
    public clienteService : ClientesService,
    private router: Router
  ) { }

  filterPost='';

  ngOnInit(): void {

    this.clienteService.getAllClientes().subscribe(resp =>{
      this.clientes = resp;
    },
     error => {console.error(error)}
    );
  } 

  Editar(cliente:Cliente):void{
    localStorage.setItem("id", cliente.id_cliente.toString());
    this.router.navigate(["editar-cliente"]);
  }

  Venta(cliente:Cliente):void{
    localStorage.setItem("id", cliente.id_cliente.toString());
    this.router.navigate(["venta"]); 
  }

  Eliminar(cliente){
    this.clienteService.deteleCliente(cliente.id_cliente).subscribe(resp=>{
      if (resp===true) {
        this.clientes.pop(cliente)
        
      }
      alert("cliente Eliminado");
      window.location.reload();


     
    })
  }

}
