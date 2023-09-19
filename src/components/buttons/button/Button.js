import React from "react";
import "./Button.css";
import Login from "../../forms/login/Login";
const Button = (props) => {
  // let data = props.name;
  // console.log(data);
  // let handleSubmit = (data) => {
  //   if (data === "LogIn") {
  //     <Login />;
  //   }
  // };
  return (
    <div>
      <button
        className="button"
        type={props.name}
        // onClick={() => handleSubmit(data)}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
