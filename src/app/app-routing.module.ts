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
import { VerificacionDocumentosComponent } from './comercializadora/verificacion-documentos/verificacion-documentos.component';
import { CreateUsersComponent } from './admin/create-users.component';
import { CrearRepuestosComponent } from './comercializadora/crear-repuestos/crear-repuestos.component';
import { ListaRepuestosComponent } from './comercializadora/lista-repuestos/lista-repuestos.component';
import { RepuestosComponent } from './comercializadora/repuestos/repuestos.component';
import { ReparacionesEjecutarComponent } from './comercializadora/reparaciones-ejecutar/reparaciones-ejecutar.component';
import { DespachoComponent } from './comercializadora/despacho/despacho.component';
import { EditarRepuestoComponent } from './editar-repuesto/editar-repuesto.component';
import { OrdenReparacionComponent } from './comercializadora/orden-reparacion/orden-reparacion.component';
import { EditarClienteComponent } from './concesionaria/editar-cliente/editar-cliente.component';
import { ListarinformeComponent } from './taller/listarinforme/listarinforme/listarinforme.component';
import { ListarsolicitudComponent } from './taller/listarsolicitud/listarsolicitud/listarsolicitud.component';
import { EditarsolicitudComponent } from './taller/editarsolicitud/editarsolicitud/editarsolicitud.component';
import { EditarinformeComponent } from './taller/editarinforme/editarinforme/editarinforme.component';
import { ListaFacturasComponent } from './concesionaria/lista-facturas/lista-facturas.component';
import { ListarOrdenComponent } from './comercializadora/listar-orden/listar-orden.component';
import { InicioinformeconcesionariaComponent } from './comercializadora/inicioinformeconcesionaria/inicioinformeconcesionaria.component';
import { ReportesgarantiaestadoComponent } from './comercializadora/reportesgarantiaestado/reportesgarantiaestado.component';
import { ReporteaprobadoComponent } from './comercializadora/reporteaprobado/reporteaprobado.component';
import { ReportedenegadoComponent } from './comercializadora/reportedenegado/reportedenegado.component';





const routes: Routes = [
  { path: '', component: IndexComponent },
  { path : 'users', component: CreateUsersComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  //comercializadora
  { path: 'inicio-comercializadora', component: IniciocomercializadoraComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'rechazo', component: InformeRechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'rechazoInforme', component: RechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'informe-rechazo/:id_factura', component: InformeRechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'informecomer', component: InformecomerComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'inicioinformeconcesionaria', component: InicioinformeconcesionariaComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'comercializadora-aceptacion/:id', component: ComercializadoraAceptacionComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'inicio-comercializadora', component: IniciocomercializadoraComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'editar', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'ordenR', component: OrdenReparacionComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'despacho', component: DespachoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'reparaciones', component: ReparacionesEjecutarComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'listaR', component: ListaRepuestosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'repuesto', component:CrearRepuestosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'repuestos', component: RepuestosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'editarR', component: EditarRepuestoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'verificacion', component: VerificacionDocumentosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'informe-rechazo', component: InformeRechazoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'comercializadora-aceptacion', component: ComercializadoraAceptacionComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'lista-orden', component:ListarOrdenComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'reporteaprobado', component:ReporteaprobadoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'reportedenegado', component:ReportedenegadoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },

  //concesionaria
  { path: 'venta', component: VentaComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'listarclientes', component: ListarClientesComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  {path: 'creacion-cliente', component: CrearClienteComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  { path: 'listar-garantias', component: ListadoGarantiasComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'generar-reclamo/:garantia', component: GenerarReclamoComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'editar-cliente', component: EditarClienteComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'cotizacion', component: GenerarCotizacionComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'lista-cotizaciones', component: ListaCotizacionesComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  { path: 'reclamos-garantia', component: GenerarReclamoComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'lista-facturas', component: ListaFacturasComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  //taller
  { path: 'informe', component:InformeTallerComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: 'solicitud', component:SolicitudTallerComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: 'listasolicitud', component:ListarsolicitudComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: 'listainforme', component:ListarinformeComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: 'editarSolicitud', component:EditarsolicitudComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: 'editarInforme', component:EditarinformeComponent , canActivate: [guards], data: { expectedRol: ['taller'] }},
  { path: '**', redirectTo: '', pathMatch: 'full' },

  
  { path: 'vender', component: VentaComponent },

  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guards], data: { expectedRol: ['taller'] } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
