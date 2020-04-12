import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletosPage } from './boletos.page';

const routes: Routes = [
  {
    path: '',
    component: BoletosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletosPageRoutingModule {}
