import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Todos } from './todos.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoAdded: string = '';
  todos: Todos[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['todoAdded'].currentValue);
    if (changes['todoAdded'].currentValue !== '') {
      this.todos.push(new Todos(changes['todoAdded'].currentValue, 1));
    }
  }
  onDelete(index: number) {
    console.log(index);
    this.todos.splice(index, 1);
  }
  onAdd() {}
  ngOnInit(): void {}
}
