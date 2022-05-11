import { Injectable } from '@angular/core';


export class CounterClarabellaService {
  private _counter = 0;
  get counter(){
    return this._counter;
  }
  constructor(initNumber: number) {
    this._counter = initNumber;
   }
  aumenta(){
    this._counter++;
  }
  diminuisce(){
    this._counter--;
  }
}
