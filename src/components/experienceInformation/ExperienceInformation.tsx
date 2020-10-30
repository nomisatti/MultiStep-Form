import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import { Card, CardContent, TextField, Button } from '@material-ui/core';

 import * as Yup from 'yup';
 
 export default function ExperienceInformation({submit , setAllData , preVal}) {

   return (
    <Card>
    <CardContent>
     <Formik
       initialValues={preVal}
       validateOnMount
       validationSchema={Yup.object({
        firstExperience: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
        firstDuration: Yup.number()
           .required('Required'),
        secondExperience: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
        secondDuration: Yup.number()
           .required('Required'),
        thirdExperience: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
        thirdDuration: Yup.number()
           .required('Required'),
       })}
       onSubmit={(values) => {

        setAllData({...values})
        submit(3)
       }}
     >

{formik => {
            return (
              <Form autoComplete="off" >

                <div className="Combined_Fields">
                  <Field name="firstExperience" helperText={<ErrorMessage name='firstExperience' />} as={TextField} variant="outlined" type="text" label="Experience # 1" />
                  <Field name="firstDuration" helperText={<ErrorMessage name='firstDuration' />} type="number" variant="outlined" as={TextField} label="Duration of Work (Y)" />
                </div>

                <div className="Combined_Fields">
                  <Field helperText={<ErrorMessage name='secondExperience' />} variant="outlined" as={TextField} name="secondExperience" type="text" label="Experience # 2" />
                  <Field helperText={<ErrorMessage name='secondDuration' />} variant="outlined" as={TextField} name="secondDuration" type="number" label="Duration of Work (Y)" />
                </div>

                <div className="Combined_Fields">
                  <Field helperText={<ErrorMessage name='thirdExperience' />} variant="outlined" as={TextField} name="thirdExperience" type="text" label="Experience # 3" />
                  <Field helperText={<ErrorMessage name='thirdDuration' />} variant="outlined" as={TextField} name="thirdDuration" type="number" label="Duration of Work (Y)" />
                </div>

            
                <div className="Buttons_Group">
                <Button onClick={() => submit(1)} variant="contained" type="button" color="secondary">
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