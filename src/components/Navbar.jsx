import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/schoollogo.jpg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-20">

        {/* Logo + College Name */}
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="College Logo"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
          />

          <h2 className="text-sm sm:text-lg md:text-xl font-bold leading-tight">
            Orchids High School
          </h2>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 font-medium">

          <Link className="hover:text-yellow-300 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/about">
            About
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/events">
            Events
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/academics">
            Academics
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/gallery">
            Gallery
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/contact">
            Contact
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-blue-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >

        <div className="flex flex-col space-y-3 px-6 font-medium">

          <Link onClick={closeMenu} to="/">
            Home
          </Link>

          <Link onClick={closeMenu} to="/about">
            About
          </Link>

          <Link onClick={closeMenu} to="/events">
            Events
          </Link>

          <Link onClick={closeMenu} to="/academics">
            Academics
          </Link>

          <Link onClick={closeMenu} to="/gallery">
            Gallery
          </Link>

          <Link onClick={closeMenu} to="/contact">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;