import React from "react";
import NavLogo from "../logo/nav-logo/NavLogo";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import "./Navbar.css";
import Button from "../buttons/button/Button";
// import Login from "../forms/login/Login";
import Input from "../inputs/input/Input";

export const Navbar = (props) => {
  return (
    <div className={props.name}>
      <NavLogo logo={props.logo} />
      <Home home={props.home} />
      <About about={props.about} />
      <Contact contact={props.contact} />
      <Button name={props.op1} />
      <Button name={props.op2} />
      <Input type={props.type} name={props.name2} />
    </div>
  );
};
