import { Switch } from '@dhis2/ui-core'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import cx from 'classnames'

import { AddButton } from '../modules/Button/AddButton'
import { StreakForm } from '../modules/StreakForm/StreakForm';
import { StreakList } from '../modules/StreakList/StreakList';
import { ViewTitle } from '../modules/ViewTitle/ViewTitle';
import {
  addStreak,
  completeStreak,
  updateStreak
} from '../redux/streak/actions';
import {
  getCompletedStreaks,
  getRunningStreaks
} from '../redux/streak/selectors';
import styles from './Home.module.scss'

export const Home = () => {
  const dispatch = useDispatch()
  const runningStreaks = useSelector(getRunningStreaks)
  const completedStreaks = useSelector(getCompletedStreaks)
  const [ addId, setAddId ] = useState(0)
  const [ showCompleted, setShowCompleted ] = useState(false)
  const [ showForm, setShowForm ] = useState(false)
  const [ streakToEdit, setStreakToEdit ] = useState(undefined)

  const showAddForm = showForm && !streakToEdit
  const className = cx(styles.home, { [styles.showForm]: showForm })
  const resetStreakToEdit = () => {
    setAddId(addId + 1)
    setStreakToEdit(undefined)
  }

  useEffect(() => {
    if (showCompleted && !completedStreaks.length) {
      setShowCompleted(false)
    }
  }, [ showCompleted, completedStreaks ])

  return (
    <div className={className}>
      <section className={styles.title}>
        <ViewTitle>
          {showForm && !streakToEdit && 'Add a new counter'}
          {showForm && streakToEdit && 'Edit counter'}
          {!showAddForm && !streakToEdit && 'Your streak counters'}
        </ViewTitle>
      </section>

      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.overview}>
            <div className={styles.streakList}>
              {!!completedStreaks.length && (
                <Switch
                  className={styles.showCompleted}
                  checked={showCompleted}
                  label={`Show completed (${completedStreaks.length})`}
                  onChange={() => setShowCompleted(!showCompleted)}
                />
              )}

              <StreakList
                streaks={
                  showCompleted
                    ? completedStreaks
                    : runningStreaks
                }
                onAddClick={() => {
                  resetStreakToEdit(undefined)
                  setShowForm(true)
                }}
                onEditClick={streak => {
                  setStreakToEdit(streak)
                  setShowForm(true)
                }}
                onCompleteClick={streak => {
                  dispatch(completeStreak(streak.id))
                }}
              />
            </div>

            <div className={styles.divider} />

            <AddButton
              primary
              className={styles.addNewButton}
              onClick={() => {
                resetStreakToEdit()
                setShowForm(true)
              }}
            >
              Add a new counter
            </AddButton>
          </div>

          <div className={styles.addForm}>
            <StreakForm
              // should re-mount to reset form / use initialValues
              key={streakToEdit ? streakToEdit.id : addId}
              initialValues={streakToEdit}
              onSubmit={
                values => {
                  setShowForm(false)

                  dispatch(
                    showAddForm 
                      ? addStreak(values)
                      : updateStreak({ ...streakToEdit, ...values })
                  )
                }
              }
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
