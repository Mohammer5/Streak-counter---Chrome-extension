export const ADD_STREAK = 'ADD_STREAK'
export const addStreak = streak => ({
  type: ADD_STREAK,
  payload: {
    streak: { id: Date.now(), ...streak }
  },
})

export const SET_STREAKS = 'SET_STREAKS'
export const setStreaks = streaks => ({
  type: SET_STREAKS,
  payload: { streaks },
})

export const REMOVE_STREAK = 'REMOVE_STREAK'
export const removeStreak = id => ({
  type: REMOVE_STREAK,
  payload: { id },
})

export const UPDATE_STREAK = 'UPDATE_STREAK'
export const updateStreak = streak => ({
  type: UPDATE_STREAK,
  payload: { streak },
})
