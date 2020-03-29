import { Button } from '../Button/Button';
import cx from 'classnames'

import React from 'react';
import styles from './AddButton.module.scss'

export const AddButton = ({ className, primary, children, onClick }) => (
  <Button
    primary={primary}
    className={cx(className, styles.addButton)}
    onClick={onClick}
    icon={
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={styles.icon}
      >
        <path
          d="M22 15.9348H16.5217V10H15.4783V15.9348H10V17.0652H15.4783V23H16.5217V17.0652H22V15.9348Z"
          className={styles.figure}
        />
      </svg>
    }
  >
    {children}
  </Button>
);
