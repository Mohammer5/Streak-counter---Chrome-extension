import React from 'react';
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './Button.module.scss'

export const Button = ({
  children,
  className,
  icon,
  primary,
  type,
  onClick,
}) => (
  <button
    type={type}
    className={cx(
      className,
      styles.button,
      { 
        [styles.primary]: primary,
        [styles.secondary]: !primary,
      },
    )}
    onClick={onClick}
  >
    {icon}
    <span className={styles.label}>{children}</span>
  </button>
)


Button.defaultProps = {
  type: 'button',
}

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  icon: propTypes.node,
  primary: propTypes.bool,
  type: propTypes.string,
  onClick: propTypes.func,
}
