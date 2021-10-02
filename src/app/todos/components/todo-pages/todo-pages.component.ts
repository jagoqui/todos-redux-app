import {Component, OnInit} from '@angular/core';
import {completeAll} from "../../todo.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-reducer";
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-pages',
  templateUrl: './todo-pages.component.html',
  styleUrls: ['./todo-pages.component.css']
})
export class TodoPagesComponent{
  todos: Todo[] = [];

  constructor(private storeSvc: Store<AppState>) {
    this.storeSvc.select('todos').subscribe((todos) => this.todos = todos);
  }

  onToggleCheckAll() {
    if (confirm('Are you sure?')) {
      this.storeSvc.dispatch(completeAll());
    }
  }
}
