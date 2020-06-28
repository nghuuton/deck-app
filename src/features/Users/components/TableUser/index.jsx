import React from "react";
import Tables from "../../../../components/table";
import { Link } from "react-router-dom";

class TableUser extends Tables {
  constructor() {
    super();
    this.state = {
      data: [
        {
          _id: 1,
          firstname: "Huu",
          lastname: "Ton",
          email: "nghuuton@gmail.com",
        },
      ],
    };
  }
  collumns = [
    {
      path: "firstname",
      label: "First Name",
      content: (user) => (
        <Link to={`/users/${user._id}`}>
          {user.firstname + " " + user.lastname}
        </Link>
      ),
    },
    { path: "lastname", label: "Last Name" },
    { path: "email", label: "E-mail" },
  ];
  render() {
    return <div>{this.renderTable()}</div>;
  }
}

export default TableUser;
