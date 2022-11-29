import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css'
import { Form, Formik, Field } from 'formik';

export const SearchForm = ({value, onSubmit }) => {
  const handleSubmit = ({movie}) => {
    onSubmit(movie);
  };

  return (
    <div>
      <Formik initialValues={{ movie: value }} onSubmit={handleSubmit}>
        <Form className={css.form}>
            <Field
              type="text"
              name="movie"
              placeholder="Movie Title"
              required
            />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
};