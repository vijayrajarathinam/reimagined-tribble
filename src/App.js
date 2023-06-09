import React, { useMemo, useState } from "react";
import StudentTable from "./component/StudentTable";
import StudentTableFb from "./component/StudentTableFb";
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
      <StudentTableFb studentData={studentData} />
    </div>
  );
}

export default App;
