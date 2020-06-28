import React from "react";
import UserForm from "../../components/UserForm";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../userSlice";

const CreateUser = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  console.log(state);
  const handleSumbit = (values) => {
    const action = addUser(values);
    dispatch(action);
  };

  return (
    <Row>
      <Col xs={{ size: 6, offset: 3 }}>
        <UserForm handleSumbit={handleSumbit} />
      </Col>
    </Row>
  );
};

export default CreateUser;
