import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: any;

  constructor(
    public fb: FormBuilder, 
    public clienteService : ClientesService
  ) { }


  ngOnInit(): void {

    this.clienteService.getAllClientes().subscribe(resp =>{
      this.clientes = resp;
    },
     error => {console.error(error)}
    );
  }

}
