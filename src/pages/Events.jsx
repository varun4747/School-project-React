function Events() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          School Events
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Our school regularly organizes cultural, academic, and sports events
          to encourage creativity, teamwork, and leadership skills.
        </p>
      </section>


      {/* Upcoming Events Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Upcoming Events 📅
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Annual Day Celebration
            </h3>
            <p className="text-gray-600">
              Cultural performances and award distribution ceremony.
            </p>
            <p className="text-blue-600 font-semibold mt-3">
              March 25, 2026
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Science Exhibition
            </h3>
            <p className="text-gray-600">
              Students present innovative science projects and experiments.
            </p>
            <p className="text-blue-600 font-semibold mt-3">
              April 10, 2026
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Sports Day
            </h3>
            <p className="text-gray-600">
              Track and field competitions promoting teamwork and fitness.
            </p>
            <p className="text-blue-600 font-semibold mt-3">
              May 5, 2026
            </p>
          </div>

        </div>

      </section>


      {/* Past Events Section */}
      <section className="bg-gray-50 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Past Events Highlights 🎉
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?school-function"
              alt="Cultural Fest"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h4 className="font-semibold">
                Cultural Fest 2025
              </h4>

              <p className="text-gray-600 text-sm">
                Students performed dance, music, and drama activities.
              </p>
            </div>
          </div>


          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?school-sports"
              alt="Sports Day"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h4 className="font-semibold">
                Sports Meet 2025
              </h4>

              <p className="text-gray-600 text-sm">
                Competitive sports events with enthusiastic participation.
              </p>
            </div>
          </div>


          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/400x250/?science-fair"
              alt="Science Fair"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h4 className="font-semibold">
                Science Fair 2025
              </h4>

              <p className="text-gray-600 text-sm">
                Innovative projects presented by talented students.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* Annual Activities Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Annual Activities
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-blue-100 p-6 rounded-xl font-semibold">
            Independence Day 🇮🇳
          </div>

          <div className="bg-blue-100 p-6 rounded-xl font-semibold">
            Republic Day
          </div>

          <div className="bg-blue-100 p-6 rounded-xl font-semibold">
            Teachers Day
          </div>

          <div className="bg-blue-100 p-6 rounded-xl font-semibold">
            Children's Day
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Participate in Our Upcoming Events
        </h2>

        <p className="mb-6">
          Encourage your child to explore talents beyond academics.
        </p>

        <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Register Now
        </button>

      </section>

    </div>
  );
}

export default Events;