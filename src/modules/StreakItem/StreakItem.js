import { differenceInCalendarDays, format } from 'date-fns';
import { useDispatch } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import { ButtonComplete } from './ButtonComplete';
import { ButtonDelete } from './ButtonDelete';
import { ButtonEdit } from './ButtonEdit';
import { removeStreak } from '../../redux/streak/actions';
import styles from './StreakItem.module.scss'

export const StreakItem = ({ streak, onEditClick, onCompleteClick }) => {
  const dispatch = useDispatch()
  const onDeleteClick = () => dispatch(removeStreak(streak.id))

  return (
    <div
      className={cx(
        styles.streakItem,
        { [styles.completed]: streak.completed },
      )}
      onClick={event => onEditClick(streak)}
    >
      <div className={styles.streakData}>
        <span className={styles.name}>
          {streak.name}
        </span>

        <span className={styles.startDate}>
          <span className={styles.label}>Started at:{' '}</span>

          <span className={styles.value}>
            {format(new Date(streak.startDate), 'yyyy MMMM dd')}
          </span>
        </span>

        <span className={styles.days}>
          <span className={styles.label}>Counter:{' '}</span>

          <span className={styles.value}>
            {differenceInCalendarDays(
              new Date(),
              new Date(streak.startDate),
            )}
            {' '}
            Day(s)
          </span>
        </span>
      </div>

      <p className={styles.actions}>
        <span
          className={styles.action}
          onClick={event => {
            event.stopPropagation()
            onDeleteClick()
          }}
        >
          <ButtonDelete />
        </span>

        <span
          className={styles.action}
          onClick={event => {
            event.stopPropagation()
            onEditClick(streak)
          }}
        >
          <ButtonEdit />
        </span>

        {!streak.completed && (
          <span
            className={styles.action}
            onClick={event => {
              event.stopPropagation()
              onCompleteClick(streak)
            }}
          >
            <ButtonComplete />
          </span>
        )}
      </p>
    </div>
  )
}
