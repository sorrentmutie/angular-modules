import { Component, OnInit } from '@angular/core';
import { CounterClarabellaService } from 'src/app/shared/services/counter-clarabella.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-topolino',
  templateUrl: './topolino.component.html',
  styleUrls: ['./topolino.component.css']
})
export class TopolinoComponent implements OnInit {
  counterClarabellaService:CounterClarabellaService | undefined = undefined;
  constructor() {
    this.counterClarabellaService = new CounterClarabellaService(7);
  }

  ngOnInit(): void {
  }

}
