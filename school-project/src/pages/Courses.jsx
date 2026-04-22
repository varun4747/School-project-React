function Courses() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Courses Offered
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Choose the right academic stream to build a strong foundation
          for your future career.
        </p>
      </section>


      {/* Streams Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* MPC */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            MPC
          </h2>

          <p className="text-gray-600 mb-4">
            Mathematics, Physics, Chemistry with integrated IIT-JEE & EAMCET coaching.
          </p>

          <ul className="text-gray-600 text-sm space-y-1 mb-4">
            <li>Engineering</li>
            <li>IIT / NIT</li>
            <li>Architecture</li>
            <li>Defence Services</li>
          </ul>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Apply MPC
          </button>

        </div>


        {/* BiPC */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-green-600 mb-3">
            BiPC
          </h2>

          <p className="text-gray-600 mb-4">
            Biology, Physics, Chemistry with NEET integrated coaching.
          </p>

          <ul className="text-gray-600 text-sm space-y-1 mb-4">
            <li>MBBS</li>
            <li>BDS</li>
            <li>Pharmacy</li>
            <li>Biotechnology</li>
          </ul>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Apply BiPC
          </button>

        </div>


        {/* MEC */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-purple-600 mb-3">
            MEC
          </h2>

          <p className="text-gray-600 mb-4">
            Mathematics, Economics, Commerce for business & finance careers.
          </p>

          <ul className="text-gray-600 text-sm space-y-1 mb-4">
            <li>CA / CMA</li>
            <li>B.Com</li>
            <li>Business Management</li>
            <li>Finance</li>
          </ul>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Apply MEC
          </button>

        </div>


        {/* CEC */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">

          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            CEC
          </h2>

          <p className="text-gray-600 mb-4">
            Civics, Economics, Commerce for law & administration careers.
          </p>

          <ul className="text-gray-600 text-sm space-y-1 mb-4">
            <li>Law</li>
            <li>Civil Services</li>
            <li>BBA</li>
            <li>Public Administration</li>
          </ul>

          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            Apply CEC
          </button>

        </div>

      </section>


      {/* Coaching Support Section */}
      <section className="bg-gray-100 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Integrated Coaching Support
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white rounded-xl shadow-md p-6">
            IIT-JEE Coaching
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            NEET Coaching
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            EAMCET Preparation
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            CA Foundation Support
          </div>

        </div>

      </section>


      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Orchids Junior College?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-blue-100 rounded-xl p-6">
            Experienced Faculty
          </div>

          <div className="bg-blue-100 rounded-xl p-6">
            Weekly Exams & Analysis
          </div>

          <div className="bg-blue-100 rounded-xl p-6">
            Study Hours Monitoring
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Admissions Open 2026–27
        </h2>

        <p className="mb-6">
          Choose your stream today and build your successful career.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default Courses;