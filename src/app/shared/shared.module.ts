import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CounterClarabellaComponent } from './components/counter-clarabella/counter-clarabella.component';
import { CounterClarabellaService } from './services/counter-clarabella.service';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    NotFoundComponent,
    CounterClarabellaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    CardComponent,
    NotFoundComponent,
    CounterClarabellaComponent
  ]
})
export class SharedModule {
  static puppapero(valoreIniziale:number = 0):ModuleWithProviders<SharedModule>{
    return {
      ngModule:SharedModule,
      providers:[{ provide: CounterClarabellaService , useFactory:()=>new CounterClarabellaService(valoreIniziale)}]
    };
  }
}
