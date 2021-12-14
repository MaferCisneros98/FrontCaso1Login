import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { VerificacionDocumentosComponent } from './comercializadora/verificacion-documentos/verificacion-documentos.component';
import { GenerarReclamoComponent } from './concesionaria/generar-reclamo/generar-reclamo.component';
import { ListadoGarantiasComponent } from './concesionaria/listado-garantias/listado-garantias.component';
import { ListaCotizacionesComponent } from './concesionaria/lista-cotizaciones/lista-cotizaciones.component';
import { GenerarCotizacionComponent } from './concesionaria/generar-cotizacion/generar-cotizacion.component';
import { VentaComponent } from './concesionaria/venta/venta.component';
import { CrearClienteComponent } from './concesionaria/crear-cliente/crear-cliente.component';
import { ListarClientesComponent } from './concesionaria/listar-clientes/listar-clientes.component';
import { TallerGuardGuard as guards } from './guards/taller-guard.guard';
import { IniciocomercializadoraComponent } from './comercializadora/iniciocomercializadora/iniciocomercializadora.component';
import { InformeRechazoComponent } from './comercializadora/informe-rechazo/informe-rechazo.component';
import { ComercializadoraAceptacionComponent } from './comercializadora/comercializadora-aceptacion/comercializadora-aceptacion.component';

import { InformecomerComponent } from './comercializadora/informecomer/informecomer.component';
import { RechazoComponent } from './comercializadora/rechazo/rechazo.component';

import { InformeTallerComponent } from './taller/informe-taller/informe-taller.component';
import { SolicitudTallerComponent } from './taller/solicitud-taller/solicitud-taller.component';





const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  //comercializadora
  { path: 'inicio-comercializadora', component: IniciocomercializadoraComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'rechazo', component: InformeRechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'rechazoInforme', component: RechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'verificacion/:id', component: VerificacionDocumentosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'informe-rechazo', component: InformeRechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'informecomer', component: InformecomerComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'comercializadora-aceptacion', component: ComercializadoraAceptacionComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },


  //concesionaria
  { path: 'creacion-cliente', component: CrearClienteComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  { path: 'cotizacion', component: GenerarCotizacionComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }  },
  { path: 'venta', component: VentaComponent, canActivate: [guard], data: { expectedRol: ['cncesionaria'] } },
  { path: 'reclamos', component: GenerarReclamoComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  { path: 'lista', component: ListaCotizacionesComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }  },
  { path: 'listar-garantias', component: ListadoGarantiasComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  { path: 'listar-clientes', component: ListarClientesComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  //taller
  { path: 'informe', component:InformeTallerComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: 'solicitud', component:SolicitudTallerComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: '**', redirectTo: '', pathMatch: 'full' },

  
  { path: 'vender', component: VentaComponent },

  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guards], data: { expectedRol: ['taller'] } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
