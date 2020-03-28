import { Button } from '@dhis2/ui-core'
import { differenceInCalendarDays, format } from 'date-fns';
import { useDispatch } from 'react-redux';
import React from 'react'

import { removeStreak } from '../../redux/streak/actions';
import styles from './StreakItem.module.scss'

export const StreakItem = ({ streak }) => {
  const dispatch = useDispatch()
  const onDeleteClick = () => dispatch(removeStreak(streak.id))

  return (
    <div className={styles.streakItem}>
      <span className={styles.name}>
        <span className={styles.label}>
          Name:
        </span>

        <span className={styles.value}>
          {streak.name}
        </span>
      </span>

      <span className={styles.startDate}>
        <span className={styles.label}>
          Stared at:
        </span>

        <span className={styles.value}>
          {format(new Date(streak.startDate), 'yyyy MMMM dd')}
        </span>
      </span>

      <span className={styles.days}>
        <span className={styles.label}>
          Counter:
        </span>

        <span className={styles.value}>
          {differenceInCalendarDays(
            new Date(),
            new Date(streak.startDate),
          )}
          {' '}
          Day(s)
        </span>
      </span>

      <p className={styles.actions}>
        <Button onClick={onDeleteClick}>Delete</Button>
      </p>
    </div>
  )
}
