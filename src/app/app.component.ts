import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  task_text = '';

  tasksList: string[] = ['texto tarea 1', 'texto tarea 2', 'texto tarea 3'];

  eliminarTask(taskIndex: number) {
    this.tasksList.splice(taskIndex, 1);
  }

  addTask(){
    this.tasksList.push(this.task_text)
  }

  addTaskText(event: Event){
    // this.task_text = event.target.
    this.task_text = (event.target as HTMLInputElement).value
  }

}
