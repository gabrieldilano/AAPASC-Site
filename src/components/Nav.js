import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Nav() {
  return (
    <Navbar fluid rounded style={{ zIndex: 1 }}>
      <NavbarBrand href="/">
        <img src="https://res.cloudinary.com/dq6oea49h/image/upload/v1724991558/Multicolor_Icon_ygrr5y.png" height={150} className="mr-1 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="articulat-cf self-center whitespace-nowrap text-xl font-semibold">AAPASC of ASU</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Link to="/" activeClassName="active" className="navbar-link">
          HOME
        </Link>
        <Link to="/events" className="navbar-link">
          EVENTS
        </Link>
        <Link to="/community" className="navbar-link">
          COMMUNITY
        </Link>
        <Link to="/contact" className="navbar-link">
          CONTACT
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
