import { Button } from '../Button/Button';
import cx from 'classnames'

import React from 'react';
import styles from './CheckButton.module.scss'

export const CheckButton = ({ className, primary, children, onClick }) => (
  <Button
    primary={primary}
    className={cx(className, styles.addButton)}
    onClick={onClick}
    icon={
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className={styles.icon}
      >
        <path
          d="M16.8872 9.03035H16.0332C15.9134 9.03035 15.7998 9.07884 15.7265 9.16181L10.689 14.7897L8.27352 12.0905C8.23698 12.0496 8.1904 12.0165 8.13729 11.9938C8.08417 11.971 8.0259 11.9591 7.96685 11.9591H7.11281C7.03095 11.9591 6.98574 12.042 7.03584 12.0981L10.3823 15.8371C10.5387 16.0117 10.8393 16.0117 10.9969 15.8371L16.9642 9.16827C17.0143 9.11332 16.9691 9.03035 16.8872 9.03035V9.03035Z"
        />
      </svg>
    }
  >
    {children}
  </Button>
);
