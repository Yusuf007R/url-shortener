import React from "react";
import { Input } from "./style";

function FormInput(props) {
  return (
    <Input
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      type={props.type}
    ></Input>
  );
}

export default FormInput;
