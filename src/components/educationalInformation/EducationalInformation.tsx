import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Card, CardContent, TextField, Button } from '@material-ui/core';

import * as Yup from 'yup';

export const EducationalInformation = ({ submit, setAllData, preVal }) => {

  return (
    <Card>
    <CardContent>
    <Formik
      initialValues={preVal}
      validateOnMount
      validationSchema={Yup.object({
        lastDegree: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
        majorSubjects: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        university: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        cgpa: Yup.number()
          .max(5, 'Must be 5 or less')
           .min(1 , 'Must be 1 or greater')
          .required('Required')

      })}
      onSubmit={(values) => {

        setAllData({ ...values })
        submit(2)
      }}
    >

      {formik => {
        return (
          <Form autoComplete="off" >

            <div className="Combined_Fields">
              <Field className='Single_Fields' name="lastDegree" helperText={<ErrorMessage name='lastDegree' />} as={TextField} variant="outlined" type="text" label="Last Degree" />
            </div>

            <div className="Combined_Fields">
              <Field className='Single_Fields' helperText={<ErrorMessage name='majorSubjects' />} variant="outlined" as={TextField} name="majorSubjects" type="text" label="Major Subjects" />
            </div>

            <div className="Combined_Fields">
              <Field className='Single_Fields' helperText={<ErrorMessage name='university' />} variant="outlined" as={TextField} name="university" type="text" label="University" />
            </div>

            <div className="Combined_Fields">
              <Field className='Single_Fields' helperText={<ErrorMessage name='cgpa' />} variant="outlined" as={TextField} name="cgpa" type="number" label='CGPA' />

            </div>
            <div className="Buttons_Group">
              <Button onClick={() => submit(0)} variant="contained" type="button" color="secondary">
                Back
                </Button>

              <Button variant="contained" type="submit" disabled={!formik.isValid} color="primary">
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