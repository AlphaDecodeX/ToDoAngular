import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoAdded: string = '';
  onAddTodo(name: HTMLInputElement) {
    this.todoAdded = name.value;
    console.log(name.value);
  }
  constructor() {}
}
