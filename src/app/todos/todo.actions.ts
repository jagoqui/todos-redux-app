import {createAction, props} from '@ngrx/store';

export const create = createAction('[TODO] Create todo', props<{ text: string }>());
export const toggle = createAction('[TODO] Toggle todo all', props<{ id: number }>());
export const edit = createAction('[TODO] Update todo', props<{ id: number, text: string }>());
export const drop = createAction('[TODO] Delete todo', props<{ id: number }>());
export const completeAll = createAction('[TODO] Complete all todos');
export const deleteAllCompleted = createAction('[TODO] Delete all completed todos');
