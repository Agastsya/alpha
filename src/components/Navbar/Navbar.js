import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbox">
      <Link to="/" className="nav-title title01">
        Home
      </Link>
      <Link className="nav-title title01">Information</Link>
      <Link className="nav-title title01">Information</Link>
      <Link className="nav-title title01">Information</Link>
      <Link className="nav-title title01">Databases</Link>
      <div className="auth">
        <Link to="/login" className="nav-title title01">
          Login
        </Link>
        <Link to="/register" className="nav-title title01">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
