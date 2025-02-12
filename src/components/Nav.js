import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <Navbar fluid rounded className="bg-white text-black py-4" style={{ zIndex: 1 }}>
      <NavbarBrand href="/">
        <img
          src="https://res.cloudinary.com/dq6oea49h/image/upload/v1724991558/Multicolor_Icon_ygrr5y.png"
          height={150}
          className="mr-3 h-10 sm:h-12"
          alt="AAPASC Logo"
        />
        <span className="articulat-cf self-center whitespace-nowrap text-xl font-semibold">
          AAPASC at ASU
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/" className="navbar-link text-lg hover:text-gray-500 transition duration-300">
            HOME
          </Link>
          <Link to="/culturefest" className="navbar-link text-lg hover:text-gray-500 transition duration-300">
            CULTUREFEST
          </Link>
          {/* <Link to="/events" className="navbar-link text-lg hover:text-gray-500 transition duration-300">
            EVENTS
          </Link> */}
         
          <Link to="/community" className="navbar-link text-lg hover:text-gray-500 transition duration-300">
            COMMUNITY
          </Link>
          <Link to="/contact" className="navbar-link text-lg hover:text-gray-500 transition duration-300">
            CONTACT
          </Link>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
