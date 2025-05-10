// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
