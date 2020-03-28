import { useSelector } from 'react-redux';
import React from 'react'

import { getStreaks } from '../../redux/streak/selectors';
import { StreakItem } from './StreakItem'
import styles from './StreakList.module.scss'

export const StreakList = () => {
  const streaks = useSelector(getStreaks)
  console.log('streaks', streaks);

  return (
    <div className={styles.streakList}>
      {!streaks.length && (
        <p className={styles.noStreaksMessage}>
          No streak counters yet.<br />
          You can add one by clicking on the button above!
        </p>
      )}
      {streaks.map(streak => (
        <StreakItem
          key={streak.id}
          streak={streak}
        />
      ))}
    </div>
  )
}
