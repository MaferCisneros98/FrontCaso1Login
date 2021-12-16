import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { usuarioService } from '../service/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  nombre: FormControl = new FormControl('')
  usuario: FormControl = new FormControl('')
  pass: FormControl = new FormControl('')
  mail: FormControl = new FormControl('')
  rol: FormControl = new FormControl('')

  nuevoUsuario: NuevoUsuario;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  roles: string[];
  isLogged = false;

  constructor(private serv: usuarioService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  users: NuevoUsuario[] = [];
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.serv.lista().subscribe(response => {
      return this.users = response
    })
  }
  registrar(): void {
    let nom = this.nombre.value;
    let us = this.usuario.value;
    let ma = this.mail.value;
    let pass = this.pass.value;
    let roles: string[] = [this.rol.value];
    this.nuevoUsuario = new NuevoUsuario(nom, us, ma, pass, roles);
    console.log(this.nuevoUsuario);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.toastr.success('Cuenta Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/users']);
        this.limpiar();
        window.location.reload();
      },
      err => {
        this.errMsj = err.error.mensaje;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        console.log(err.error.message);
      }
    )
  }
  limpiar() {
    this.nombre.setValue('');
    this.usuario.setValue('');
    this.pass.setValue('');
    this.mail.setValue('');
    this.rol.setValue('');
  }


}
