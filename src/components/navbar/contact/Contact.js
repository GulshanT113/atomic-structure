import React from "react";
import Button from "../../buttons/button/Button";

const Contact = (props) => {
  return (
    <div>
      <Button name={props.contact} />
    </div>
  );
};

export default Contact;
