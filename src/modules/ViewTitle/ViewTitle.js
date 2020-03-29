import React from 'react'
import styles from './ViewTitle.module.scss'

export const ViewTitle = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      {children}
    </div>
  </div>
)

