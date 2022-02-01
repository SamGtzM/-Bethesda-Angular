import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAlmacenComponent } from './components/admin-almacen/admin-almacen.component';
import { AdminClientesComponent } from './components/admin-clientes/admin-clientes.component';
import { AdminControlGasolinaComponent } from './components/admin-control-gasolina/admin-control-gasolina.component';
import { AdminEntregasComponent } from './components/admin-entregas/admin-entregas.component';
import { AdminMantenimientoComponent } from './components/admin-mantenimiento/admin-mantenimiento.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminVentasComponent } from './components/admin-ventas/admin-ventas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RepartidorEntregasComponent } from './components/repartidor-entregas/repartidor-entregas.component';
import { RepartidorReglamentoComponent } from './components/repartidor-reglamento/repartidor-reglamento.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'repartidor_entregas', component: RepartidorEntregasComponent, canActivate: [AuthGuard] },
  { path: 'repartidor_reglamento', component: RepartidorReglamentoComponent, canActivate:[RoleGuard], data: { expectedRole: 2 } },
  { path: 'admin_usuarios', component: AdminUsuariosComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_mantenimiento', component: AdminMantenimientoComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_entregas', component: AdminEntregasComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_productos', component: AdminProductosComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_almacen', component: AdminAlmacenComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_ventas', component: AdminVentasComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_control_gasolina', component: AdminControlGasolinaComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: 'admin_clientes', component: AdminClientesComponent, canActivate:[RoleGuard], data: { expectedRole: 1 } },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
