import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { MainComponent } from './main/main.component';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    MainComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
  ]
})
export class BodyModule { }
