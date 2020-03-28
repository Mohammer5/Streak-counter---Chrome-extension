import { Button, Field as CoreField, Label, Help } from '@dhis2/ui-core'
import { Form, Field, Input } from '@dhis2/ui-forms'
import { format } from 'date-fns';
import React from 'react'

export const StreakForm = ({ initialValues, onSubmit }) => {
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

                <input {...input} />

                {meta.error && meta.touched && (
                  <Help error>{meta.error}</Help>
                )}
              </CoreField>
            )}
          </Field>

          <Button primary type="submit">Add streak counter</Button>
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
