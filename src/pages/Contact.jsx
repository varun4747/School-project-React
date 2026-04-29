function Contact() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-14 md:py-20 px-4">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Orchids High School
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Reach out to us for admissions enquiries, school information, or
          general support. Our team is happy to assist you.
        </p>

      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Contact Details */}
        <div className="space-y-6">

          <h2 className="text-2xl md:text-3xl font-bold">
            Get in Touch 📞
          </h2>

          <p className="text-gray-600">
            Parents and students can contact us through the details below or
            send a message using the enquiry form.
          </p>


          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="bg-blue-50 p-5 rounded-xl shadow">
              <h4 className="font-semibold">📍 Address</h4>
              <p className="text-gray-600 text-sm">
                Orchids High School Campus, Addanki,
                Andhra Pradesh
              </p>
            </div>


            <div className="bg-blue-50 p-5 rounded-xl shadow">
              <h4 className="font-semibold">📞 Phone</h4>
              <p className="text-gray-600 text-sm">
                +91 9876543210
              </p>
            </div>


            <div className="bg-blue-50 p-5 rounded-xl shadow">
              <h4 className="font-semibold">📧 Email</h4>
              <p className="text-gray-600 text-sm break-words">
                orchidshighschool@gmail.com
              </p>
            </div>


            <div className="bg-blue-50 p-5 rounded-xl shadow">
              <h4 className="font-semibold">🕒 Working Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon – Sat : 9:00 AM – 5:00 PM
              </p>
            </div>

          </div>


          {/* Social Media */}
          <div>

            <h4 className="font-semibold text-lg mb-2">
              Follow Us 🌐
            </h4>

            <div className="flex gap-4 flex-wrap">

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

              <a
                href="mailto:orchidshighschool@gmail.com"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Email
              </a>

            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8">

          <h2 className="text-2xl font-bold mb-5">
            Admission Enquiry Form ✉️
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Student Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Parent Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Select Class Applying For</option>
              <option>Pre-Primary</option>
              <option>Primary (1–5)</option>
              <option>Upper Primary (6–8)</option>
              <option>High School (9–10)</option>
            </select>


            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>


            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </section>


      {/* Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Visit Our Campus 🗺️
        </h2>

        <div className="rounded-xl overflow-hidden shadow-xl">

          <iframe
            title="school-location"
            src="https://www.google.com/maps?q=Addanki,Andhra%20Pradesh&output=embed"
            width="100%"
            height="420"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;