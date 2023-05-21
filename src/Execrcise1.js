import React, { useMemo, useState } from "react";
const studentData = [
  {
    roleNumber: 327433678,
    firstName: "Vijay",
    lastName: "Rajarathinam",
    dob: "12/04/2001",
  },
  {
    roleNumber: 327433678,
    firstName: "Vijay",
    lastName: "Rajarathinam",
    dob: "12/04/2001",
  },
  {
    roleNumber: 327433678,
    firstName: "Vijay",
    lastName: "Rajarathinam",
    dob: "12/04/2001",
  },
];

function App() {
  const [students, setStudents] = useState(studentData);

  return (
    <div className="App">
      <table>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td>
                  {" "}
                  <a href={`/student/${student.roleNumber}`} target="_blank">
                    {student.roleNumber}
                  </a>
                </td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
