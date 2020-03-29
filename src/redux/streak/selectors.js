import { createSelector } from 'reselect'

export const getStreaks = state => state.streak

export const getRunningStreaks = createSelector(
  getStreaks,
  streaks => streaks.filter(streak => !streak.completed)
)

export const getCompletedStreaks = createSelector(
  getStreaks,
  streaks => streaks.filter(streak => streak.completed)
)
