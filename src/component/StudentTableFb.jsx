import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

export default function StudentTableFb(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const { data } = response;
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p>loading ....</p>;
  } else
    return (
      <>
        <StudentForm setPosts={setPosts} />
        <table>
          <tbody>
            {/* {props.studentData.map((student) => {
          return (
            <tr>
              <td>
                <a href={`/student/${student.roleNumber}`} target="_blank">
                  {student.roleNumber}
                </a>
              </td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.dob}</td>
            </tr>
          );
        })} */}

            {posts.map((post) => {
              return (
                <tr>
                  <td>
                    <a href={`/student/${post?.id}`} target="_blank">
                      {post?.id}
                    </a>
                  </td>
                  <td>{post?.userId}</td>
                  <td>{post?.title}</td>
                  <td>{post?.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}
