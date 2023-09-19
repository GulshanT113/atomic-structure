import React from "react";
import Input from "../../inputs/input/Input";
import Button from "../../buttons/button/Button";

const Login = (props) => {
  return (
    <div>
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <Input type="textarea" name="address" />
      {/* <Button name={props.name} /> */}
    </div>
  );
};

export default Login;
