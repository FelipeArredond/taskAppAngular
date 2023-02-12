import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() taskText: string = '';
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onAddText: EventEmitter<any> = new EventEmitter();

  add() {
    this.onAdd.emit(null);
  }

  addText(event: Event){
    this.onAddText.emit(event);
  }

}
