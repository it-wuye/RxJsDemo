import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivtestComponent } from './divtest/divtest.component';
import { BuffertestComponent } from './buffertest/buffertest.component';

const routes: Routes = [
  { path: 'divtest', component: DivtestComponent },
  { path: 'buffertest', component: BuffertestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
