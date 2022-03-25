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
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    MainComponent,
    GaleriaComponent,
    CalderasComponent,
    GasComponent,
    AerotermiaComponent,
    CalefaccionComponent,
    AcsComponent,
    SaneamientosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    RouterModule,
    SharedModule,
    NgbModule,
    NgbCarouselModule

  ]
})
export class BodyModule { }
