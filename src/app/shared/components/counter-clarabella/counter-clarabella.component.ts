import { Component, OnInit } from '@angular/core';
import { CounterClarabellaService } from '../../services/counter-clarabella.service';

@Component({
  selector: 'app-counter-clarabella',
  templateUrl: './counter-clarabella.component.html',
  styleUrls: ['./counter-clarabella.component.css']
})
export class CounterClarabellaComponent {

  constructor(private counterClarabellaService:CounterClarabellaService) {

  }
  aumenta(){
    this.counterClarabellaService.aumenta();
  }
  diminuisce(){
    this.counterClarabellaService.diminuisce();
  }
  esponi():number{
    return this.counterClarabellaService.counter;
  }
}
