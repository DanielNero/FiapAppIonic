import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', loadChildren: './pages/clientes/clientes.module#ClientesPageModule' },
  { path: 'clientes/:id', loadChildren: './pages/boletos/boletos.module#BoletosPageModule' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }