import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormComponent,
  ]
})
export class SharedModule { }
