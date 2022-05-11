import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PippoComponent } from './pippo/pippo.component';
import { TopolinoComponent } from './topolino.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeService } from './services/home.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FirstMinniInterceptor } from './interceptors/first-minni.interceptor';


@NgModule({
  declarations: [
    HomeComponent,
    PippoComponent,
    TopolinoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule.puppapero(513),
    // HttpClientModule
  ],
  exports:[
    HomeComponent,
    TopolinoComponent
  ],
  providers:[
    HomeService,
    // { provide: HTTP_INTERCEPTORS , useClass:FirstMinniInterceptor, multi: true },
  ]
})
export class HomeModule { }
