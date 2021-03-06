import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationComponent } from './activation.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: ActivationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivationRoutingModule { }
