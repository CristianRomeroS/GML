import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'inicio',
    component:MainComponent
  },
  {
    path:'galeria',
    component:GaleriaComponent
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
