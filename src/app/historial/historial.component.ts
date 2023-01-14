import { Component, Input } from '@angular/core';

@Component({
  selector: 'historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  @Input() valorHistorial: string[] = [];
}
