import { createReducer, on } from '@ngrx/store';
import { sidebarToggle, reset } from '../actions/core.actions';

export const initialState = false;

const _reducer = createReducer(initialState,
  on(sidebarToggle, state => !state),
  on(reset, state => true)
);

export function coreReducer(state, action) {
  return _reducer(state, action);
}