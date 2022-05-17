import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoHeaderComponent, TodoListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
