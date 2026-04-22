import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo + College Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="College Logo"
            className="h-16 w-16 object-contain"
          />

          <div className="leading-tight">
            <h2 className="text-lg md:text-xl font-bold">
              Sadana junior College
            </h2>

            {/* <p className="text-xs text-gray-200">
              MPC | BiPC | CEC | MEC
            </p> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">

          <Link className="hover:text-yellow-300 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/about">
            About
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/courses">
            Courses
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/academics">
            Academics
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/admissions">
            Admissions
          </Link>

          {/* <Link className="hover:text-yellow-300 transition" to="/results">
            Results
          </Link> */}

          <Link className="hover:text-yellow-300 transition" to="/contact">
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">

          <Link className="block hover:text-yellow-300" to="/">
            Home
          </Link>

          <Link className="block hover:text-yellow-300" to="/about">
            About
          </Link>

          <Link className="block hover:text-yellow-300" to="/courses">
            Courses
          </Link>

          <Link className="block hover:text-yellow-300" to="/academics">
            Academics
          </Link>

          <Link className="block hover:text-yellow-300" to="/admissions">
            Admissions
          </Link>

          <Link className="block hover:text-yellow-300" to="/results">
            Results
          </Link>

          <Link className="block hover:text-yellow-300" to="/contact">
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;