import {
  ADD_STREAK,
  COMPLETE_STREAK,
  REMOVE_STREAK,
  SET_STREAKS,
  UPDATE_STREAK
} from './actions';

export const streakDefaultState = []

export const streakReducer = (
  state = streakDefaultState,
  action = {},
) => {
  const { type, payload = {} } = action
  const { id, streak, streaks } = payload

  if (type === ADD_STREAK)
    return [ ...state, streak ]

  if (type === SET_STREAKS)
    return streaks

  if (type === REMOVE_STREAK)
    return state.filter(curStreak => curStreak.id !== id)

  if (type === UPDATE_STREAK)
    return state.map(curStreak => 
      curStreak.id === streak.id
        ? { ...curStreak, ...streak }
        : curStreak
    )

  if (type === COMPLETE_STREAK)
    return state.map(curStreak => 
      curStreak.id === id
        ? { ...curStreak, completed: true }
        : curStreak
    )

  return state
}
