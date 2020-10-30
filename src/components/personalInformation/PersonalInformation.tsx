import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent, TextField, Button } from '@material-ui/core';

export const PersonalInformation = ({ submit, setAllData, preVal }) => {
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={preVal}
          validateOnMount
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            age: Yup.number()
              .max(32, 'Age must be 32 or less')
              .min(18, 'Age must be 18 or above')
              .required('Age is Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            city: Yup.string()
              .required('City field is Required'),
            country: Yup.string()
              .required('Country field is required'),
            address: Yup.string()
              .max(30, 'Address must be 30 characters or less')
              .required('Address is required')
          })}
          onSubmit={(values) => {

            setAllData({ ...values })
            submit(1)

          }}
        >
          {formik => {
            return (
              <Form autoComplete="off" >

                <div className="Combined_Fields">
                  <Field name="firstName" helperText={<ErrorMessage name='firstName' />} as={TextField} variant="outlined" type="text" label="First Name" />
                  <Field name="lastName" helperText={<ErrorMessage name='lastName' />} type="text" variant="outlined" as={TextField} label="Last Name" />
                </div>

                <div className="Combined_Fields">
                  <Field helperText={<ErrorMessage name='email' />} variant="outlined" as={TextField} name="email" type="email" label="Email" />
                  <Field helperText={<ErrorMessage name='age' />} variant="outlined" as={TextField} name="age" type="number" label="Age" />
                </div>

                <div className="Combined_Fields">
                  <Field helperText={<ErrorMessage name='city' />} variant="outlined" as={TextField} name="city" type="text" label="City" />
                  <Field helperText={<ErrorMessage name='country' />} variant="outlined" as={TextField} name="country" type="text" label="Country" />
                </div>

                <div className="Combined_Fields">
                  <Field className='Single_Fields' helperText={<ErrorMessage name='address' />} variant="outlined" as={TextField} multiline rows={10} col={10} name="address" type="text" label='Address' />

                </div>
                <div className="Buttons_Group">

                <Button className="proceedButton" variant="contained" type="submit" disabled={!formik.isValid} color="primary">
                  Proceed
                </Button>
                </div>

              </Form>

            )
          }}

        </Formik>
      </CardContent>
    </Card>
  );
};