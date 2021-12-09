import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformetallerService } from 'src/app/services/informetaller/informetaller.service';


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

}
