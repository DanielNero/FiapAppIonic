import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletosPageRoutingModule } from './boletos-routing.module';

import { BoletosPage } from './boletos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletosPageRoutingModule
  ],
  declarations: [BoletosPage]
})
export class BoletosPageModule {}
