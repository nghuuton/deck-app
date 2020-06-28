import React from "react";
import { Link } from "react-router-dom";
import TableUser from "../../components/TableUser";
import { Row, Col } from "reactstrap";

const MainPage = () => {
  return (
    <Row>
      <Col sm={{ size: 6, offset: 3 }}>
        <Link to="/users/add">Add new User</Link>
        <TableUser />
      </Col>
    </Row>
  );
};

export default MainPage;
