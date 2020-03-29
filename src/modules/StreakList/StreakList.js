import { SingleSelect, SingleSelectOption } from '@dhis2/ui-core'
import React, { useEffect, useState } from 'react'

import { StreakItem } from '../StreakItem/StreakItem'
import styles from './StreakList.module.scss'

const sortingOptions = [
  { value: 'id', label: 'Added' },
  { value: 'startDate', label: 'Started' },
]

const directionOptions = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
]

const sortStreaks = (streaks, sortBy, direction) => {
  const sorted = [ ...streaks ]

  sorted.sort((left, right) => {
    if (left[sortBy] < right[sortBy]) return direction === 'asc' ? -1 : 1
    if (left[sortBy] > right[sortBy]) return direction === 'asc' ? 1 : -1
    return 0
  })

  return sorted
}

export const StreakList = ({ streaks, onAddClick, onEditClick, onCompleteClick }) => {
  const [ sorting, setSorting ] = useState(sortingOptions[0])
  const [ direction, setDirection ] = useState(directionOptions[0])
  const [ sorted, setSorted ] = useState([])

  useEffect(() => {
    setSorted(sortStreaks(streaks, sorting.value, direction.value))
  }, [ streaks, sorting.value, direction.value ])

  return (
    <div className={styles.streakList}>
      {!streaks.length && (
        <p className={styles.noStreaksMessage}>
          You don't have any running streaks yet.<br />
          Try{' '}
          <button className={styles.addLink} onClick={onAddClick}>
            adding a streak
          </button>!
        </p>
      )}

      {streaks.length > 1 && (
        <div className={styles.sortingContainer}>
          <div className={styles.sorting}>
            <SingleSelect
              onChange={({ selected }) => setSorting(selected)}
              selected={sorting}
            >
              {sortingOptions.map(({ value, label }) => (
                <SingleSelectOption key={value} value={value} label={label} />
              ))}
            </SingleSelect>
          </div>

          <div className={styles.direction}>
            <SingleSelect
              onChange={({ selected }) => setDirection(selected)}
              selected={direction}
            >
              {directionOptions.map(({ value, label }) => (
                <SingleSelectOption key={value} value={value} label={label} />
              ))}
            </SingleSelect>
          </div>
        </div>
      )}

      {sorted.map(streak => (
        <div className={styles.streakItem} key={streak.id}>
          <StreakItem
            streak={streak}
            onEditClick={onEditClick}
            onCompleteClick={onCompleteClick}
          />
        </div>
      ))}
    </div>
  )
}
