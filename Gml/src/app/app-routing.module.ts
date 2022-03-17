import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


 const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('src/app/modules/body/body.module').then(m=>m.BodyModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
