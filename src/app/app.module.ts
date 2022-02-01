import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminAlmacenComponent } from './components/admin-almacen/admin-almacen.component';
import { AdminControlGasolinaComponent } from './components/admin-control-gasolina/admin-control-gasolina.component';
import { AdminEntregasComponent } from './components/admin-entregas/admin-entregas.component';
import { AdminMantenimientoComponent } from './components/admin-mantenimiento/admin-mantenimiento.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminVentasComponent } from './components/admin-ventas/admin-ventas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RepartidorEntregasComponent } from './components/repartidor-entregas/repartidor-entregas.component';
import { RepartidorReglamentoComponent } from './components/repartidor-reglamento/repartidor-reglamento.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminClientesComponent } from './components/admin-clientes/admin-clientes.component';
import { MenuSesionComponent } from './components/menu-sesion/menu-sesion.component';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminAlmacenComponent,
    AdminControlGasolinaComponent,
    AdminEntregasComponent,
    AdminMantenimientoComponent,
    AdminProductosComponent,
    AdminUsuariosComponent,
    AdminVentasComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RepartidorEntregasComponent,
    RepartidorReglamentoComponent,
    AdminClientesComponent,
    MenuSesionComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // JWT
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    // Token interceptor
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
