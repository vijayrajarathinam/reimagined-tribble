import axios from "axios";
import React, { useState } from "react";

export default function StudentForm(props) {
  const [post, setPost] = useState({ title: "", body: "" });

  const onChangeHandler = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newPost = { ...post, [name]: value };

    setPost(newPost);
  };

  function onSubmitHandler(e) {
    // const { preventDefault } = e;
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        const { data } = response;
        props.setPosts((curr) => [data, ...curr]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input value={post.title} name="title" onChange={onChangeHandler} />
      <input value={post.body} name="body" onChange={onChangeHandler} />
      <button>Submit</button>
    </form>
  );
}
