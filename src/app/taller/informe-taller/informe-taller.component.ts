import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformetallerService } from 'src/app/services/informetaller/informetaller.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-informe-taller',
  templateUrl: './informe-taller.component.html',
  styleUrls: ['./informe-taller.component.css']
})
export class InformeTallerComponent implements OnInit {
  informeForm: FormGroup;
  informes: any;
  constructor(
    public fb: FormBuilder,
    public informeService: InformetallerService,

  ) { }

  ngOnInit(): void {
this.informeForm=this.fb.group({
      id_InformeTaller: [''],
      id_cliente: ['', Validators.required],
      placa: ['', Validators.required],
      descripcion: ['', Validators.required],
    
});
  }
  guardar(): void{
    this.informeService.saveinforme(this.informeForm.value).subscribe(resp =>{
      this.informeForm.reset();
      this.informes=this.informes.filter(informe => resp.id!==informe.id);
      this.informes.push(resp);
    },
      error => {console.error(error)}
    )
  }
  
  displayBasic: boolean = false;
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_5up9k1b', 'template_omqqqsa', e.target as HTMLFormElement, 'user_FdjTVgCweoSvdsrOBPXy4'
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
