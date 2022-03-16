import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { BodyRoutingModule } from './body-routing.module';
import { MainComponent } from './main/main.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CalderasComponent } from './calderas/calderas.component';
import { GasComponent } from './gas/gas.component';
import { AerotermiaComponent } from './aerotermia/aerotermia.component';
import { CalefaccionComponent } from './calefaccion/calefaccion.component';
import { AcsComponent } from './acs/acs.component';
import { SaneamientosComponent } from './saneamientos/saneamientos.component';
import { SharedModule } from '../shared/shared.module';


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
    RouterModule,
    SharedModule
  ]
})
export class BodyModule { }
