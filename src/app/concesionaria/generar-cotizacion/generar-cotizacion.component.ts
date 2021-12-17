import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import emailjs,{ EmailJSResponseStatus } from "emailjs-com";

import { CotizacionService } from "../../services/cotizacion/cotizacion.service";

@Component({
  selector: "app-generar-cotizacion",
  templateUrl: "./generar-cotizacion.component.html",
  styleUrls: ["./generar-cotizacion.component.css"],
})
export class GenerarCotizacionComponent implements OnInit {
  cotizacionForm: FormGroup;
  cotizaciones: any;
  

  constructor(
    public fb: FormBuilder,
    public cotizacionService: CotizacionService
  ) {}

  displayBasic: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm("service_0aupzyk","template_ks9yyge", e.target as HTMLFormElement,"user_e0NCMuTaxxOqeRetJkf5j"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      'id_cotizacion': [""],
      'cedula': ["", Validators.required],
      'nombre': ["", Validators.required],
      'apellido': ["", Validators.required],
      'correo': ["", Validators.required],
      'fecha_nacimiento': ["", Validators.required],
      'modelo': ["", Validators.required],
      'marca': ["", Validators.required],
      'estado': [""],
    });
  }

  guardar(): void {
    this.cotizacionService.saveCotizacion(this.cotizacionForm.value).subscribe(
      (resp) => {
        this.cotizacionForm.reset();
        
       
      },
      (error) => {
        console.error(error);
      }
    );
  }

  
}
