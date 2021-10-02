import {Action, createReducer, on} from '@ngrx/store';
import {create, edit, toggle, drop, completeAll, deleteAllCompleted} from "./todo.actions";
import {Todo} from "./models/todo.model";

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(toggle, (state, {id}) => {
    return state.map((todo: Todo): Todo => {
      if (todo.id !== id) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed
      }
    });
  }),
  on(edit, (state, {id, text}) => {
    return state.map((todo: Todo): Todo => {
      if (todo.id !== id) {
        return todo;
      }
      return {
        ...todo,
        text
      }
    });
  }),
  on(drop, (state, {id}) => state.filter((todo) => todo.id !== id)),
  on(completeAll, (state) => {
    return state.map((todo: Todo): Todo => {
      return {
        ...todo,
        completed: !todo.completed
      }
    });
  }),
  on(deleteAllCompleted, (state) => state.filter((todo) => !todo.completed)),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
