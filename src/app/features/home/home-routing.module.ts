import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PippoComponent } from './pippo/pippo.component';
import { TopolinoComponent } from './topolino.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pippo', component: PippoComponent },
  { path: 'topolino', component: TopolinoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
