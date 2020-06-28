import React from "react";
import { Input, Label, FormGroup, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

const InputField = (props) => {
  const { label, form, field, type = "text", placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        {...field}
        disabled={disabled}
        invalid={showError}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default InputField;
