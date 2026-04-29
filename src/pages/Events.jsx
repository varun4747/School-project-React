function Events() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-14 md:py-20 px-4">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          School Events & Activities
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Orchids High School encourages students to participate in cultural,
          academic, and sports activities that support creativity, leadership,
          and teamwork.
        </p>

      </section>


      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Upcoming Events 📅
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Annual Day Celebration",
              desc: "Cultural performances and award distribution ceremony.",
              date: "March 25, 2026",
            },
            {
              title: "Science Exhibition",
              desc: "Students present innovative science projects.",
              date: "April 10, 2026",
            },
            {
              title: "Sports Day",
              desc: "Track and field competitions promoting teamwork.",
              date: "May 5, 2026",
            },
          ].map((event, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition border-l-4 border-blue-600"
            >

              <h3 className="text-xl font-semibold mb-2">
                {event.title}
              </h3>

              <p className="text-gray-600">
                {event.desc}
              </p>

              <p className="text-blue-700 font-semibold mt-4">
                {event.date}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Past Events Gallery */}
      <section className="bg-gray-50 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Past Events Highlights 🎉
        </h2>

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              img: "https://source.unsplash.com/400x250/?school-cultural-event",
              title: "Cultural Fest 2025",
              desc: "Dance, music, and drama performances by students.",
            },
            {
              img: "https://source.unsplash.com/400x250/?school-sports-day",
              title: "Sports Meet 2025",
              desc: "Competitive games encouraging physical fitness.",
            },
            {
              img: "https://source.unsplash.com/400x250/?school-science-exhibition",
              title: "Science Fair 2025",
              desc: "Creative science innovations by young learners.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden group"
            >

              <div className="overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-4">

                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Annual Celebrations */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Annual Celebrations
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

          {[
            "Independence Day",
            "Republic Day",
            "Teachers Day",
            "Children’s Day",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-blue-100 hover:bg-blue-200 transition p-6 rounded-xl font-semibold shadow-sm"
            >
              {item}
            </div>

          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-14 md:py-16 px-4">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Encourage Your Child to Explore Their Talents
        </h2>

        <p className="mb-6 text-sm md:text-lg">
          At Orchids High School, learning extends beyond classrooms through
          exciting events and activities.
        </p>

        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact School & Register
        </button>

      </section>

    </div>
  );
}

export default Events;