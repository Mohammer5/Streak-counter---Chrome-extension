import { combineReducers } from 'redux'

import { streakReducer } from './streak/reducer';

export const rootReducer = combineReducers({
  streak: streakReducer,
})
