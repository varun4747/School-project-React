function Contact() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          We'd love to hear from you. Reach out to us for admissions,
          inquiries, or general information.
        </p>
      </section>


      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Contact Details */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold">
            Get in Touch 📞
          </h2>

          <p className="text-gray-600">
            Contact us through the following details or send us a message
            using the form.
          </p>


          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg">📍 Address</h4>
            <p className="text-gray-600">
              My School Campus, Main Road, Addanki, Andhra Pradesh
            </p>
          </div>


          {/* Phone */}
          <div>
            <h4 className="font-semibold text-lg">📞 Phone</h4>
            <p className="text-gray-600">+91 9876543210</p>
          </div>


          {/* Email */}
          <div>
            <h4 className="font-semibold text-lg">📧 Email</h4>
            <p className="text-gray-600">
              myschool@gmail.com
            </p>
          </div>


          {/* Social Media */}
          <div>

            <h4 className="font-semibold text-lg mb-2">
              Follow Us 🌐
            </h4>

            <div className="flex gap-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Send Message ✉️
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* Google Map Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">

        <h2 className="text-3xl font-bold text-center mb-6">
          Our Location 🗺️
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">

          <iframe
            title="school-location"
            src="https://www.google.com/maps?q=Addanki,Andhra%20Pradesh&output=embed"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;