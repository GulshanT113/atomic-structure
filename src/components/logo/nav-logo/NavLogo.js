import React from "react";
import Button from "../../buttons/button/Button";

const NavLogo = (props) => {
  return (
    <div>
      <Button name={props.logo} />
    </div>
  );
};

export default NavLogo;
