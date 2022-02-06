import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'**',
    redirectTo:'main'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
