import React from 'react';
import { Formik, Form, Field } from 'formik';

const MyForm = () => (
  <div>
    <h1>Calificación de aviso</h1>
    <Formik
      initialValues={{ rating: '', comment: '', name: '', email: '' }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="rating">Calificación:</label>
          <Field name="rating" type="range" min="1" max="5" />

          <label htmlFor="comment">Comentario:</label>
          <Field name="comment" type="text" />

          <label htmlFor="name">Nombre:</label>
          <Field name="name" type="text" />

          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />

          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default MyForm;