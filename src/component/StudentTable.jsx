import React, { Component } from "react";

export default class StudentTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { studentData } = this.props;

    if (this.state.loading) {
      return <p>loading ....</p>;
    } else
      return (
        <table>
          <tbody>
            {studentData.map((student) => {
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
            })}
          </tbody>
        </table>
      );
  }
}
