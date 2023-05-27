import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";

export default function StudentForm(props) {
  // const [post, setPost] = useState();

  // const onChangeHandler = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   const newPost = { ...post, [name]: value };

  //   setPost(newPost);
  // };

  function onSubmitHandler(values, { setSubmitting }) {
    // const { preventDefault } = e;
    // e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then((response) => {
        const { data } = response;
        setSubmitting(false);
        props.setPosts((curr) => [data, ...curr]);
      })
      .catch((err) => console.log(err));
  }

  function validateForm(values) {
    // [ [title, ""], [body, ""] ]
    const errors = {};
    Object.entries(values).forEach((val) => {
      const [name, value] = val;
      if (value?.trim() === "") errors[name] = "required";
    });

    return errors;
  }

  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      validate={validateForm}
      onSubmit={onSubmitHandler}
    >
      {({
        values,
        errors,
        touched,
        handleChange: onChangeHandler,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              value={values.title}
              name="title"
              onChange={onChangeHandler}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && errors.title}
            <input
              value={values.body}
              name="body"
              onChange={onChangeHandler}
              onBlur={handleBlur}
            />
            {errors.body && touched.body && errors.body}
            <button disabled={isSubmitting}>Submit</button>
          </form>
        );
      }}
    </Formik>
  );
}
