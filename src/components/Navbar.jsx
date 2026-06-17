import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Hyderabad Temple Tourism</h2>
      <div className="nav-links">
        <Link to="/" className="nav-box">Home</Link>
        <Link to="/booking" className="nav-box">Booking</Link>
        <Link to="/poojas" className="nav-box">Poojas</Link>
        <Link to="/donation" className="nav-box">Donation</Link>
        <Link to="/dashboard" className="nav-box">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;

