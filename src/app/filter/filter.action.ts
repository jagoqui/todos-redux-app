import {createAction, props} from "@ngrx/store";
import {Filter} from "../todos/models/filter.model";

export const setFilter = createAction('[Filter] Set filter', props<{ filterType: Filter }>());
