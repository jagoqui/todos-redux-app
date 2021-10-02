import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-reducer";
import {Todo} from "../../models/todo.model";
import {Filter} from "../../models/filter.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  currentFilter: Filter={
    filterType: 'all'
  }

  constructor(private storeSvc: Store<AppState>) {
  }

  ngOnInit(): void {
    this.storeSvc.subscribe(({todos, filterType})=>{
        this.todos = todos;
        this.currentFilter = filterType;
    });

  }

}
