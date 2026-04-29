import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* School Info */}
        <div>

          <h3 className="text-lg md:text-xl font-bold mb-3">
            Orchids High School
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            Providing quality education with strong academic foundation,
            discipline, creativity, and holistic student development.
          </p>

        </div>


        {/* Classes Offered */}
        <div>

          <h4 className="font-semibold mb-3">
            Classes Offered
          </h4>

          <div className="flex flex-col space-y-2 text-gray-300 text-sm">

            <span>Pre-Primary</span>

            <span>Primary School (1–5)</span>

            <span>Upper Primary (6–8)</span>

            <span>High School (9–10)</span>

          </div>

        </div>


        {/* Contact Info */}
        <div>

          <h4 className="font-semibold mb-3">
            Contact Us
          </h4>

          <div className="text-gray-300 text-sm space-y-2 leading-relaxed">

            <p>📍 Addanki, Andhra Pradesh</p>

            <p>📞 +91 9876543210</p>

            <p className="break-words">
              📧 orchidshighschool@gmail.com
            </p>

          </div>

        </div>

      </div>


      {/* Social Media Section */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-blue-800 hover:bg-blue-600 transition"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-blue-800 hover:bg-blue-600 transition"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="mailto:orchidshighschool@gmail.com"
          className="p-2 rounded-full bg-blue-800 hover:bg-blue-600 transition"
        >
          <FaEnvelope size={20} />
        </a>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-blue-800 hover:bg-blue-600 transition"
        >
          <FaMapMarkerAlt size={20} />
        </a>

      </div>


      {/* Divider */}
      <div className="border-t border-blue-700 mt-6"></div>


      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-2">

        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Orchids High School. All rights reserved.
        </p>

        <p className="text-center md:text-right">
          Designed for Academic Excellence 🎓
        </p>

      </div>

    </footer>
  );
}

export default Footer;