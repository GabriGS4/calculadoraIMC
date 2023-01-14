import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'altura-peso',
  templateUrl: './altura-peso.component.html',
  styleUrls: ['./altura-peso.component.css']
})
export class AlturaPesoComponent {
  @Output() eventoAsignarPeso = new EventEmitter<number>();
  @Output() eventoAsignarAltura = new EventEmitter<number>();
  @Input() valorAltura: number = 150;
  @Input() valorPeso: number = 50;
  @Input() intervalId:any = null;

  public sumarPeso(): void {
    this.valorPeso++;
    this.eventoAsignarPeso.emit(this.valorPeso);
  }

  public restarPeso(): void {
    this.valorPeso--;
    this.eventoAsignarPeso.emit(this.valorPeso);
  }

  public sumarAltura(): void {
    this.valorAltura++;
    this.eventoAsignarAltura.emit(this.valorAltura);
  }

  public restarAltura(): void {
    this.valorAltura--;
    this.eventoAsignarAltura.emit(this.valorAltura);
  }

  public startIncrementPeso() {
    this.intervalId = setInterval(() => {
      this.valorPeso += 5;
    }, 170);
  }

  public stopIncrementPeso() {
    clearInterval(this.intervalId);
  }

  public startLessPeso() {
    this.intervalId = setInterval(() => {
      this.valorPeso -= 5;
    }, 170);
  }

  public stopLessPeso() {
    clearInterval(this.intervalId);
  }

  public startIncrementAltura() {
    this.intervalId = setInterval(() => {
      this.valorAltura += 5;
    }, 170);
  }

  public stopIncrementAltura() {
    clearInterval(this.intervalId);
  }

  public startLessAltura() {
    this.intervalId = setInterval(() => {
      this.valorAltura -= 5;
    }, 170);
  }

  public stopLessAltura() {
    clearInterval(this.intervalId);
  }
}
