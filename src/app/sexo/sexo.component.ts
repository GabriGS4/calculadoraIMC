import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css']
})
export class SexoComponent implements OnInit {
  @Input() valorSexo: string = '';
  @Input() colorBotonMujer: string = 'rgb(90, 157, 244)';
  @Input() colorBotonHombre: string = 'rgb(90, 157, 244)';
  @Output() eventoAsignarSexo = new EventEmitter<string>();
  @Output() eventoAsignarBtnSexo = new EventEmitter<string>();

  ngOnInit(): void {
    this.colorBotonHombre = 'rgb(90, 157, 244)';
    this.colorBotonMujer = 'rgb(90, 157, 244)';
  }


  public asignarSexo($boton: any): void {
    if ($boton.target.value === 'mujer') {
      this.valorSexo = $boton.target.value;
      this.colorBotonMujer = 'rgb(97, 211, 93)';
      this.colorBotonHombre = 'rgb(90, 157, 244)';
      this.eventoAsignarSexo.emit(this.valorSexo);
      this.eventoAsignarBtnSexo.emit(this.colorBotonMujer);
    } else if ($boton.target.value === 'hombre') {
      this.valorSexo = $boton.target.value;
      this.colorBotonHombre = 'rgb(97, 211, 93)';
      this.colorBotonMujer = 'rgb(90, 157, 244)';
      this.eventoAsignarSexo.emit(this.valorSexo);
      this.eventoAsignarBtnSexo.emit(this.colorBotonHombre);
    }
  }
}
