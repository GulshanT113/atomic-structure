import "./App.css";
import Input from "./components/inputs/input/Input";
// import Login from "./components/forms/login/Login";
// import Button from "./components/buttons/button/Button";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h1>hello-world</h1>
      <Navbar
        name="topbar"
        op1="LogIn"
        op2="SignIn"
        logo="Top-Logo"
        about="Top-About"
        home="Top-Home"
        contact="Top-Contact"
        type="name"
        name2="name"
      />
      <Navbar
        name="leftbar"
        op1="Profile"
        op2="Logout"
        logo="Left-Logo"
        about="Left-About"
        home="Left-Home"
        contact="Left-Contact"
        type="textarea"
        name2="address"
      />
      <Navbar
        name="rightbar"
        op1="Start Now"
        op2="Initialization"
        logo="Right-Logo"
        about="Right-About"
        home="Right-Home"
        contact="Right-Contact"
        type="email"
        name2="email"
      />
      <Navbar
        name="bottombar"
        op1="Register"
        op2="More"
        logo="Bottom-Logo"
        about="Bottom-About"
        home="Bottom-Home"
        contact="Bottom-Contact"
        type="number"
        name2="number"
      />
      <Input type="submit" name="submit" />
    </div>
  );
}

export default App;
