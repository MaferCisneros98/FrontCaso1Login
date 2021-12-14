import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-informe-rechazo',
  templateUrl: './informe-rechazo.component.html',
  styleUrls: ['./informe-rechazo.component.css']
})
export class InformeRechazoComponent implements OnInit {

  producto: Producto = null;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }


  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.update(id, this.producto).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
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
