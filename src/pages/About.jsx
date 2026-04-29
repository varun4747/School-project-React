import principalImg from "../assets/images/image.png";

function About() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-16 md:py-20 px-4">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About Orchids High School
        </h1>

        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Providing quality education that nurtures knowledge, discipline,
          creativity, and leadership skills for building a bright future.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">

          <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
            Smart Classrooms
          </span>

          <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
            Experienced Teachers
          </span>

          <span className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
            Holistic Development
          </span>

        </div>

      </section>


      {/* School Overview */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Our Institution
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Orchids High School is committed to providing a strong academic
          foundation along with moral values, creativity, and physical
          development. We encourage students to explore their talents and grow
          into confident and responsible individuals.
        </p>

      </section>


      {/* Vision & Mission */}
      <section className="bg-gray-50 py-14">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6">

          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">

            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To inspire young learners to become confident, creative, and
              responsible citizens through quality education and strong values.
            </p>

          </div>


          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">

            <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To provide a safe and encouraging learning environment that
              promotes academic excellence, discipline, innovation, and
              character building.
            </p>

          </div>

        </div>

      </section>


      {/* Principal Message */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <img
            src={principalImg}
            alt="Principal"
            className="rounded-xl shadow-lg w-full h-[260px] md:h-[350px] object-cover"
          />

          <div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Principal’s Message
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Orchids High School, we believe every child has unique
              potential. Our goal is to create an inspiring environment where
              students can explore their abilities, develop confidence, and
              achieve academic excellence along with strong moral values.
            </p>

          </div>

        </div>

      </section>


      {/* Achievements Section */}
      <section className="bg-blue-700 text-white py-12">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">25+</h2>
            <p>Years Excellence</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">100%</h2>
            <p>Board Results</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">1200+</h2>
            <p>Students Strength</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">80+</h2>
            <p>Qualified Teachers</p>
          </div>

        </div>

      </section>


      {/* Academic Strength Features */}
      <section className="bg-gray-50 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Strengths
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

          {[
            "Smart Classrooms",
            "Experienced Faculty",
            "Digital Learning Support",
            "Sports & Activities",
            "Computer Lab",
            "Science Laboratories",
          ].map((feature) => (

            <div
              key={feature}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
            >
              {feature}
            </div>

          ))}

        </div>

      </section>


      {/* Classes Offered */}
      <section className="py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Classes Offered
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">

          {[
            "Pre-Primary",
            "Primary",
            "Upper Primary",
            "High School",
          ].map((cls) => (

            <div
              key={cls}
              className="bg-blue-100 rounded-xl p-6 text-center font-semibold hover:bg-blue-200 transition"
            >
              {cls}
            </div>

          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-14 px-4">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Admissions Open 2026–27
        </h2>

        <p className="mb-6">
          Join Orchids High School and give your child a strong academic
          foundation for a bright future.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default About;