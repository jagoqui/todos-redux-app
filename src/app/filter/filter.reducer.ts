import {Action, createReducer, on} from '@ngrx/store';
import {setFilter} from "./filter.action";
import {Filter} from "../todos/models/filter.model";

export const initialState: Filter = {
  filterType: 'all'
};

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (_, {filterType}) => filterType),
);

export function filterReducer(state: Filter | undefined, action: Action) {
  return _filterReducer(state, action);
}
