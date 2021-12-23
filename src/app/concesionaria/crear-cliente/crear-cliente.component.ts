import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientesService } from "../../services/clientes/clientes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-crear-cliente",
  templateUrl: "./crear-cliente.component.html",
  styleUrls: ["./crear-cliente.component.css"],
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  clientes: any;
  cedulaCliente: any;
  dato:any;

  constructor(
    public fb: FormBuilder,
    public clienteService: ClientesService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.clienteForm = this.fb.group({
      id_cliente: [""],
      cedula: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],
    });

    this.clienteService.getAllClientes().subscribe(
      (resp) => {
        this.clientes = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  mayus(e) {
    e.value = e.value.toUpperCase();
  }



  guardarPorId(){

      this.dato=this.cedula.value;
      console.log(this.dato);
    
      this.clienteService.buscarCedula(this.dato)
      .subscribe(data=>{
          this.cedulaCliente = data;
          console.log(this.cedulaCliente);
          if (this.cedulaCliente == true) {
            alert("Cliente ya existe")
          }else{
             this.guardar();
          }
      })
  }

  


  guardar(): void {
    this.clienteService.saveClientes(this.clienteForm.value).subscribe(
      (resp) => {
        alert("cliente creado");
        this.router.navigate(["listarclientes"]);
        this.clienteForm.reset();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get cedula() {
    return this.clienteForm.get("cedula");
  }
  get nombre() {
    return this.clienteForm.get("nombre");
  }
  get apellido() {
    return this.clienteForm.get("apellido");
  }
}
