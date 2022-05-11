import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    CardComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
