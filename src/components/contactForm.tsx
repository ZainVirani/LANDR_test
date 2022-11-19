import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactFromForm } from '../types/contact';
import { Button, Typography } from '@mui/material';

export const ContactForm = ({
  initialValues,
  onSubmit,
  submitButtonText
}: {
  initialValues: Partial<ContactFromForm>;
  onSubmit: (values: Partial<ContactFromForm>) => Promise<void>;
  submitButtonText: string;
}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        jobTitle: '',
        address: '',
        phoneNumbers: '',
        email: '',
        ...initialValues
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (
          values.email &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="contactForm">
          <label className="formLabel"><Typography>{'Name (required)'}</Typography></label>
          <Field focus name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <label className="formLabel"><Typography>Job Title</Typography></label>
          <Field name="jobTitle" placeholder="Job Title" />
          <ErrorMessage name="jobTitle" component="div" />
          <label className="formLabel"><Typography>Address</Typography></label>
          <Field name="address" placeholder="Address" />
          <ErrorMessage name="address" component="div" />
          <label className="formLabel"><Typography>{'Phone Numbers (comma separated)'}</Typography></label>
          <Field
            name="phoneNumbers"
            placeholder="Phone Numbers (comma separated)"
          />
          <ErrorMessage name="phoneNumbers" component="div" />
          <label className="formLabel"><Typography>Email</Typography></label>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Button type="submit" disabled={isSubmitting} variant="outlined">
            <Typography>{submitButtonText}</Typography>
          </Button>
        </Form>
      )}
    </Formik>
  );
};
