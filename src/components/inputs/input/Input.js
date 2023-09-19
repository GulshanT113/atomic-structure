import React from "react";

const Input = (props) => {
  return (
    <div>
      <input type={props.type} name={props.name} placeholder={props.name} />
    </div>
  );
};

export default Input;
