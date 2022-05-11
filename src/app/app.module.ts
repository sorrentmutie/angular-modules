import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FirstMinniInterceptor } from './features/home/interceptors/first-minni.interceptor';
import { CounterClarabellaService } from './shared/services/counter-clarabella.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.puppapero(54),
    CoreModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass:FirstMinniInterceptor, multi: true },
    // { provide:CounterClarabellaService, useFactory:()=>new CounterClarabellaService(12) },

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
