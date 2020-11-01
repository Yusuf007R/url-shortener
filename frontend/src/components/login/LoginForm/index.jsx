import React from "react";
import { FormInput } from "./style";

function LoginForm(props) {
  return (
    <div>
      <form>
        <label for="fname">Email Address or Username:</label>
        <br></br>
        <FormInput type="text" id="fname" name="fname"></FormInput>
        <br></br>
        <label for="lname">Password:</label>
        <br></br>
        <FormInput type="password" id="lname" name="lname"></FormInput>
      </form>

      <button>Submit</button>
    </div>
  );
}

export default LoginForm;
