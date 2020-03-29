import React from 'react'
import styles from './ButtonEdit.module.scss'

export const ButtonEdit = () => (
  <span className={styles.container}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        className={styles.figure}
        d="M16.1479 6.33149L18.6873 8.87642C19.1183 9.30681 19.0808 10.0366 18.7154 10.4109L11.2098 17.9147L6 19L7.08694 13.7792C7.08694 13.7792 14.2083 6.64025 14.5737 6.26599C14.9392 5.90109 15.7169 5.90109 16.1479 6.33149ZM13.5899 8.94191L8.35192 14.1908L9.39201 15.2294L14.5831 9.94304L13.5899 8.94191ZM10.8069 16.6422L16.0355 11.4026L15.0329 10.3921L9.79493 15.6317L10.8069 16.6422Z"
      />
    </svg>
  </span>
)
