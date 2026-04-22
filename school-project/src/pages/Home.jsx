import collegeImage from "../assets/images/image.png";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${collegeImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Sadana Junior College
          </h1>

          <p className="text-lg md:text-2xl mb-6 max-w-3xl">
            Excellence in Intermediate Education with Integrated Coaching for
            IIT-JEE, NEET & EAMCET.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Admissions Open 2026–27
            </button>

            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              View Courses
            </button>

          </div>

        </div>
      </section>


      {/* Courses Section */}
      <section className="bg-blue-800 text-white py-12">

        <h2 className="text-3xl font-bold text-center mb-8">
          Courses Offered
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center px-4">

          <div className="bg-blue-700 rounded-xl p-6 shadow-md">
            MPC
          </div>

          <div className="bg-blue-700 rounded-xl p-6 shadow-md">
            BiPC
          </div>

          <div className="bg-blue-700 rounded-xl p-6 shadow-md">
            MEC
          </div>

          <div className="bg-blue-700 rounded-xl p-6 shadow-md">
            CEC
          </div>

        </div>

      </section>


      {/* Results Highlights Section */}
      <section className="bg-gray-100 py-14">

        <h2 className="text-3xl font-bold text-center mb-10">
          Academic Achievements
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h2 className="text-4xl font-bold text-blue-700">98%</h2>
            <p>Board Results</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-700">500+</h2>
            <p>IIT / NEET Selections</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-700">25+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-700">120+</h2>
            <p>Expert Faculty</p>
          </div>

        </div>

      </section>


      {/* About College Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://source.unsplash.com/600x400/?college-campus"
          alt="college campus"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Sadana Junior College
          </h2>

          <p className="text-gray-600 mb-6">
            Sadana Junior College provides high-quality intermediate education
            with integrated coaching programs designed to help students succeed
            in competitive exams like IIT-JEE, NEET, and EAMCET. Our experienced
            faculty ensure conceptual clarity and academic excellence.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>

        </div>

      </section>


      {/* Facilities Section */}
      <section className="bg-gray-50 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Facilities
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            Digital Classrooms
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            IIT-JEE Coaching
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            NEET Coaching
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            Study Hours Monitoring
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            Experienced Faculty
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            Weekly Exams & Analysis
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Start Your Career Journey With Us
        </h2>

        <p className="mb-6">
          Admissions are now open for Intermediate First Year students.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default Home;