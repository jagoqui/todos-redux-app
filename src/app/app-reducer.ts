import {Todo} from "./todos/models/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";
import {filterReducer} from "./filter/filter.reducer";
import {Filter} from "./todos/models/filter.model";

export interface AppState {
  todos: Todo[],
  filterType: Filter
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filterType: filterReducer
}
