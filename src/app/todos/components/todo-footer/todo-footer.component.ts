import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-reducer";
import {Filter} from "../../models/filter.model";
import {setFilter} from "../../../filter/filter.action";
import {deleteAllCompleted} from "../../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: Filter = {
    filterType: 'all'
  }
  filters: Filter[] = [{filterType: 'all'}, {filterType: 'completed'}, {filterType: 'active'}]
  leftItems: number = 0;

  constructor(private storeSvc: Store<AppState>) {
  }

  onSetFilter(filter: Filter) {
    this.currentFilter = filter;
    this.storeSvc.dispatch(setFilter({filterType: this.currentFilter}));
  }

  onClearCompleted() {
    if (confirm('Are you sure?')) {
      this.storeSvc.dispatch(deleteAllCompleted());
    }
  }

  ngOnInit(): void {
    this.storeSvc.subscribe(({todos, filterType}) => {
      this.leftItems = todos.filter((todo) => !todo.completed).length;
      this.currentFilter = filterType;
    })
  }
}
