import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

import { InformeRechazoComponent } from './comercializadora/informe-rechazo/informe-rechazo.component';
import { VerificacionDocumentosComponent } from './comercializadora/verificacion-documentos/verificacion-documentos.component';

import { VentaComponent } from './concesionaria/venta/venta.component';
import { GenerarReclamoComponent } from './concesionaria/generar-reclamo/generar-reclamo.component';
import { GenerarCotizacionComponent } from './concesionaria/generar-cotizacion/generar-cotizacion.component';
import { ListaCotizacionesComponent } from './concesionaria/lista-cotizaciones/lista-cotizaciones.component';
import { ListarClientesComponent } from './concesionaria/listar-clientes/listar-clientes.component';
import { ListadoGarantiasComponent } from './concesionaria/listado-garantias/listado-garantias.component';
import { IniciocomercializadoraComponent } from './comercializadora/iniciocomercializadora/iniciocomercializadora.component';
import { CrearClienteComponent } from './concesionaria/crear-cliente/crear-cliente.component';
import { ComercializadoraAceptacionComponent } from './comercializadora/comercializadora-aceptacion/comercializadora-aceptacion.component';

import { InformecomerComponent } from './comercializadora/informecomer/informecomer.component';
import { RechazoComponent } from './comercializadora/rechazo/rechazo.component';

import { InformeTallerComponent } from './taller/informe-taller/informe-taller.component';
import { SolicitudTallerComponent } from './taller/solicitud-taller/solicitud-taller.component';
import { CreateUsersComponent } from './admin/create-users.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    VerificacionDocumentosComponent,
    InformeRechazoComponent,
    GenerarReclamoComponent,
    GenerarCotizacionComponent,
    ListaCotizacionesComponent,
    ListarClientesComponent,
    ListadoGarantiasComponent,
    IniciocomercializadoraComponent,
    CrearClienteComponent,
    VentaComponent,
    ComercializadoraAceptacionComponent,
    CreateUsersComponent,
    InformecomerComponent,
    RechazoComponent,
    InformeTallerComponent,
    SolicitudTallerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
