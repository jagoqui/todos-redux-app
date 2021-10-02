import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoFooterComponent} from './components/todo-footer/todo-footer.component';
import {TodoAddComponent} from './components/todo-add/todo-add.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoPagesComponent} from './components/todo-pages/todo-pages.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    TodoFooterComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPagesComponent,
    FilterPipe
  ],
  exports: [
    TodoPagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TodoModule {
}
