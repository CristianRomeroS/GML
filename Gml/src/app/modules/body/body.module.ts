import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { MainComponent } from './main/main.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainComponent,
    GaleriaComponent,
    
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NgbModule
  ],
  exports: [GaleriaComponent],
  bootstrap: [GaleriaComponent]
})
export class BodyModule { }
