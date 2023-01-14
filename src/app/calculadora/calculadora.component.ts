import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  title = 'Calculadora del IMC';
  @Input() nombre: string = '';
  @Input() sexo: string = '';
  @Input() btnHombre: string = '';
  @Input() btnMujer: string = '';
  @Input() altura: number = 150;
  @Input() peso: number = 50;
  @Input() calculo: number = 0;
  @Input() resultado: string = '';
  @Input() resultadoFinal: string = '';
  @Input() historial: string[] = [];

  public asignarSexo($sexo: string): void {
    this.sexo = $sexo;
  }

  public asignarBtnSexo($colorBtn: string): void {
    if (this.sexo === 'hombre') {
      this.btnHombre = $colorBtn;
    } else if (this.sexo === 'mujer') {
      this.btnMujer = $colorBtn;
    }
  }

  public asignarAltura($altura: number): void {
    this.altura = $altura;
  }

  public asignarPeso($peso: number): void {
    this.peso = $peso
  }

  public borrar(): void {
    this.nombre = '';
    this.sexo = '';
    this.altura = 150;
    this.peso = 50;
    this.resultado = '';
    this.btnHombre = 'rgb(90, 157, 244)';
    this.btnMujer = 'rgb(90, 157, 244)';
  }

  public calcular(): void {
    if (this.nombre === '' || this.sexo === '') {
      this.resultado = 'Debes introducir todos los datos';
    } else {
      this.calculo = this.peso / ((this.altura / 100) * (this.altura / 100));
      if (this.calculo < 18.5) {
        this.resultado = 'Estás en un peso muy bajo';
        this.resultadoFinal = this.nombre + ' es un/a ' + this.sexo + ' y está en un peso muy bajo';
        this.historial.push(this.resultadoFinal);
      } else if (this.calculo >= 18.5 && this.calculo <= 24.9) {
        this.resultado = 'Estás en tu peso ideal';
        this.resultadoFinal = this.nombre + ' es un/a ' + this.sexo + ' y está en su peso ideal';
        this.historial.push(this.resultadoFinal);
      } else if (this.calculo >= 25.0 && this.calculo <= 29.9) {
        this.resultado = 'Tienes sobrepeso';
        this.resultadoFinal = this.nombre + ' es un/a ' + this.sexo + ' y tiene sobrepeso';
        this.historial.push(this.resultadoFinal);
      } else if (this.calculo >= 30.0) {
        this.resultado = 'Tienes obesidad';
        this.resultadoFinal = this.nombre + ' es un/a ' + this.sexo + ' y tiene obesidad';
        this.historial.push(this.resultadoFinal);
      }
    }
  }
}
