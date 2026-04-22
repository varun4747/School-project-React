import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide">
          My School
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link className="hover:text-yellow-300 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/about">
            About
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/academics">
            Academics
          </Link>

          <Link className="hover:text-yellow-300 transition" to="/events">
            Events
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
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-4 space-y-2">

          <Link className="block hover:text-yellow-300" to="/">
            Home
          </Link>

          <Link className="block hover:text-yellow-300" to="/about">
            About
          </Link>

          <Link className="block hover:text-yellow-300" to="/academics">
            Academics
          </Link>

          <Link className="block hover:text-yellow-300" to="/events">
            Events
          </Link>

          <Link className="block hover:text-yellow-300" to="/gallery">
            Gallery
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