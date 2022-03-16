import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { MainComponent } from './main/main.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CalderasComponent } from './calderas/calderas.component';
import { GasComponent } from './gas/gas.component';
import { AerotermiaComponent } from './aerotermia/aerotermia.component';
import { CalefaccionComponent } from './calefaccion/calefaccion.component';
import { AcsComponent } from './acs/acs.component';
import { SaneamientosComponent } from './saneamientos/saneamientos.component';


@NgModule({
  declarations: [
    MainComponent,
    GaleriaComponent,
    CalderasComponent,
    GasComponent,
    AerotermiaComponent,
    CalefaccionComponent,
    AcsComponent,
    SaneamientosComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
  ]
})
export class BodyModule { }
