import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() texto: string = '';
  @Output() onEliminar: EventEmitter<any> = new EventEmitter();

  isTareaCompletada: boolean = false;

  toggleTareaCompletada() {
    if (this.isTareaCompletada) {
      console.log(`${this.texto} completada`);
    } else {
      console.log(`${this.texto} sin completar`);
    }
  }



  eliminar() {
    this.onEliminar.emit(null);
  }
}
