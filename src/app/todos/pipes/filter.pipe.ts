import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../models/todo.model";
import {FILTER, Filter} from "../models/filter.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: Filter): Todo[] {
    switch (filter.filterType){
      case 'completed':
        return todos.filter((todo: Todo) =>todo.completed);
      case 'active':
        return todos.filter((todo: Todo) =>!todo.completed);
      default:
        return todos;
    }
  }

}
