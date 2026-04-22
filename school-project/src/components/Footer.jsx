import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* College Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            Sadana Junior College
          </h3>

          <p className="text-gray-300 text-sm">
            Providing quality Intermediate education with integrated coaching
            for IIT-JEE, NEET & EAMCET.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">
            Quick Links
          </h4>

          <div className="flex flex-col space-y-2 text-gray-300 text-sm">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/courses">Courses</Link>

            <Link to="/admissions">Admissions</Link>

            <Link to="/gallery">Gallery</Link>

            <Link to="/contact">Contact</Link>

          </div>
        </div>


        {/* Courses */}
        <div>
          <h4 className="font-semibold mb-3">
            Streams Offered
          </h4>

          <div className="flex flex-col space-y-2 text-gray-300 text-sm">

            <span>MPC – Engineering Track</span>

            <span>BiPC – Medical Track</span>

            <span>MEC – Commerce Track</span>

            <span>CEC – Civils & Law Track</span>

          </div>
        </div>


        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">
            Contact Us
          </h4>

          <div className="text-gray-300 text-sm space-y-2">

            <p>📍 Addanki, Andhra Pradesh</p>

            <p>📞 +91 9876543210</p>

            <p>📧 sadanajuniorcollege@gmail.com</p>

          </div>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-gray-300 text-sm">

        © {new Date().getFullYear()} Orchids Junior College. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;