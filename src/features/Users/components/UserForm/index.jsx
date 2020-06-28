import React from "react";
import { Button, FormGroup, Container } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import InputField from "../../../../custom/inputField";

const UserForm = (props) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
  };
  const userSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required."),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("This Field is must be a E-mail")
      .required("E-mail is required."),
  });
  const { handleSumbit } = props;
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => handleSumbit(values)}
      >
        {() => {
          /* console.log(formikProps); */
          return (
            <Form>
              <FastField
                name="firstname"
                label="First Name"
                component={InputField}
                placeholder="Enter your First Name...."
              />
              <FastField
                name="lastname"
                label="Last Name"
                component={InputField}
                placeholder="Enter your Last Name...."
              />
              <FastField
                name="email"
                label="E-mail"
                component={InputField}
                placeholder="What your E-mail Address...."
              />
              <FormGroup>
                <Button color="primary" type="submit">
                  Add
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default UserForm;
