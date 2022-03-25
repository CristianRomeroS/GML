import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcsComponent } from './acs/acs.component';
import { AerotermiaComponent } from './aerotermia/aerotermia.component';
import { CalderasComponent } from './calderas/calderas.component';
import { CalefaccionComponent } from './calefaccion/calefaccion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GasComponent } from './gas/gas.component';
import { MainComponent } from './main/main.component';
import { SaneamientosComponent } from './saneamientos/saneamientos.component';

 const routes: Routes = [
  {
    path:'inicio',
    component:MainComponent
  },
  {
    path:'calderas',
    component:CalderasComponent
  },
  {
    path:'acs',
    component:AcsComponent
  },
  {
    path:'calefaccion',
    component:CalefaccionComponent
  },
  {
    path:'saneamientos',
    component:SaneamientosComponent
  },
  {
    path:'aerotermia',
    component:AerotermiaComponent
  },
  {
    path:'gas',
    component:GasComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
