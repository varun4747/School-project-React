import principalImg from "../assets/images/image.png";

function About() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-20">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Sadana Junior College
        </h1>

        <p className="text-lg max-w-3xl mx-auto mb-6">
          Delivering excellence in Intermediate education with integrated
          coaching for IIT-JEE, NEET & EAMCET through structured academics and
          expert mentoring.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
            IIT-JEE Coaching
          </span>

          <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
            NEET Preparation
          </span>

          <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
            EAMCET Training
          </span>
        </div>

      </section>


      {/* Institution Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Our Institution
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Sadana Junior College is committed to shaping students into confident
          achievers through disciplined academic planning, continuous
          assessment systems, and integrated competitive exam preparation. Our
          structured methodology ensures strong conceptual clarity and excellent
          board results every year.
        </p>

      </section>


      {/* Vision & Mission */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">

          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To create future engineers, doctors, administrators and business
              leaders through quality intermediate education and strong
              conceptual learning.
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To integrate Intermediate Board syllabus with national-level
              entrance coaching using expert faculty and continuous performance
              monitoring systems.
            </p>
          </div>

        </div>

      </section>


      {/* Director Message */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={principalImg}
            alt="Director"
            className="rounded-2xl shadow-xl"
          />

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Director’s Message
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Sadana Junior College, we focus on disciplined academic
              training combined with expert mentoring to prepare students for
              Intermediate Board examinations as well as IIT-JEE, NEET and
              EAMCET entrance tests. Our goal is to help every student achieve
              their dream professional career.
            </p>

          </div>

        </div>

      </section>


      {/* Academic Strength Counters */}
      <section className="bg-blue-700 text-white py-14">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h2 className="text-4xl font-bold">25+</h2>
            <p>Years Excellence</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100%</h2>
            <p>Board Results</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p>Entrance Selections</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">80+</h2>
            <p>Expert Faculty</p>
          </div>

        </div>

      </section>


      {/* Academic Strength Features */}
      <section className="bg-gray-50 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Academic Strengths
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition text-center">
            Integrated Coaching
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition text-center">
            Experienced Faculty
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition text-center">
            Weekly Performance Analysis
          </div>

        </div>

      </section>


      {/* Streams Section */}
      <section className="py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Streams Offered
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

          {["MPC", "BiPC", "MEC", "CEC"].map((stream) => (
            <div
              key={stream}
              className="bg-blue-100 rounded-xl p-6 text-center font-semibold hover:bg-blue-200 transition"
            >
              {stream}
            </div>
          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Admissions Open 2026-27
        </h2>

        <p className="mb-6">
          Join Sadana Junior College and start your journey toward professional
          success.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default About;