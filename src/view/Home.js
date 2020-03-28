import { TabBar, Tab } from '@dhis2/ui-core';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'

import { StreakForm } from '../modules/streak/StreakForm';
import { StreakList } from '../modules/streak/StreakList';
import { addStreak } from '../redux/streak/actions';
import styles from './Home.module.scss'

export const Home = () => {
  const dispatch = useDispatch()
  const [ showAddForm, setShowAddForm ] = useState(false)

  return (
    <div className={styles.home}>
      <TabBar>
        <Tab selected={!showAddForm} onClick={() => setShowAddForm(false)}>
          Streaks
        </Tab>

        <Tab selected={showAddForm} onClick={() => setShowAddForm(true)}>
          Add streak
        </Tab>
      </TabBar>

      {!showAddForm && (
        <div className={styles.section}>
          {/* <h1 className={styles.headline}>You streak overview</h1> */''}

          <h2>You streak overview</h2>

          <StreakList />
        </div>
      )}

      {showAddForm && (
        <div className={styles.section}>
          <h2>Add a new counter</h2>
          <StreakForm
            onSubmit={values => {
              dispatch(addStreak(values))
              setShowAddForm(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
