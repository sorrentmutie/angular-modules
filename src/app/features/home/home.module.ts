import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PippoComponent } from './pippo/pippo.component';
import { TopolinoComponent } from './topolino.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    PippoComponent,
    TopolinoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    TopolinoComponent
  ]
})
export class HomeModule { }
