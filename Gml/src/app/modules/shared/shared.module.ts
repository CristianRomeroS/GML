import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PoliticadeprivacidadComponent } from './politicadeprivacidad/politicadeprivacidad.component';
import { ContentbodyComponent } from './contentbody/contentbody.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormComponent,
    PoliticadeprivacidadComponent,
    ContentbodyComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ContentbodyComponent
  ]
})
export class SharedModule { }
