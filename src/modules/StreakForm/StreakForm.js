import { Field as CoreField, Label, Help } from '@dhis2/ui-core'
import { Form, Field, Input } from '@dhis2/ui-forms'
import { format } from 'date-fns';
import React from 'react'

import { Button } from '../Button/Button';
import styles from './StreakForm.module.scss'

/**
 * @TODO "initialFocus" on text input
 */
export const StreakForm = ({ editMode, initialValues, onSubmit, onCancel }) => {
  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            label="Name"
            component={Input}
            validate={val => val ? undefined : 'Required'}
          />

          <Field
            name="startDate"
            type="date"
            parse={date => new Date(date).toISOString()}
            format={isoString => format(new Date(isoString), 'yyyy-MM-dd')}
          >
            {({ input, meta }) => (
              <CoreField>
                <Label>Start date</Label>

                <input className={styles.dateInput} {...input} />

                {meta.error && meta.touched && (
                  <Help error>{meta.error}</Help>
                )}
              </CoreField>
            )}
          </Field>

          <div className={styles.actions}>
            <Button className={styles.action} primary type="submit">
              {
                editMode
                  ? 'Save changes'
                  : 'Add streak counter'
              }
            </Button>
            <Button className={styles.action} onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      )}
    </Form>
  )
}

StreakForm.defaultProps = {
  initialValues: {
    name: '',
    startDate: (new Date()).toISOString(),
  },
}
