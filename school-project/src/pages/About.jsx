import principalImg from "../assets/files/images/image.png";
function About() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          About Our School
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          We are committed to providing quality education that builds strong
          character, creativity, and leadership skills in students.
        </p>
      </section>


      {/* School History */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-center mb-6">
          Our History 📘
        </h2>

        <p className="text-gray-600 text-center leading-relaxed">
          Our school was established with the vision of providing excellent
          education to students while nurturing discipline, creativity, and
          innovation. Over the years, we have built a strong reputation for
          academic excellence and extracurricular achievements.
        </p>

      </section>


      {/* Vision & Mission */}
      <section className="bg-gray-50 py-12">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

          {/* Vision Card */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Vision 🌟
            </h3>

            <p className="text-gray-600">
              To inspire students to become responsible citizens and future
              leaders through innovative learning and strong values.
            </p>
          </div>


          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Mission 🎯
            </h3>

            <p className="text-gray-600">
              To provide quality education that encourages curiosity,
              creativity, discipline, and excellence in academics and
              extracurricular activities.
            </p>
          </div>

        </div>

      </section>


      {/* Principal Message */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <img
            src={principalImg}
            alt="Principal"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Principal’s Message
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Welcome to our school! We believe every child has unique potential.
              Our goal is to create a safe and inspiring learning environment
              where students can explore their talents and achieve success in
              life. Together with parents and teachers, we shape bright futures.
            </p>
          </div>

        </div>

      </section>


      {/* Facilities Section */}
      <section className="bg-gray-50 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Facilities 🏫
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">
              Smart Classrooms
            </h4>

            <p className="text-gray-600">
              Digital learning environment with modern teaching technology.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">
              Science Labs
            </h4>

            <p className="text-gray-600">
              Well-equipped laboratories for practical learning experience.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">
              Library
            </h4>

            <p className="text-gray-600">
              A rich collection of books to enhance knowledge and creativity.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;