function Academics() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Academics
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Our academic programs focus on excellence, innovation, and holistic
          student development through modern teaching methods.
        </p>
      </section>


      {/* Curriculum Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-center mb-6">
          Curriculum Overview 📚
        </h2>

        <p className="text-gray-600 text-center leading-relaxed">
          Our curriculum is designed to balance academics, creativity, physical
          education, and leadership skills. We follow a structured approach that
          prepares students for higher education and future careers.
        </p>

      </section>


      {/* Classes Offered */}
      <section className="bg-gray-50 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Classes Offered
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Primary School
            </h3>
            <p className="text-gray-600">
              Building strong foundations through interactive learning.
            </p>
          </div>


          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Middle School
            </h3>
            <p className="text-gray-600">
              Developing analytical thinking and subject knowledge.
            </p>
          </div>


          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              High School
            </h3>
            <p className="text-gray-600">
              Preparing students for board exams and future careers.
            </p>
          </div>

        </div>

      </section>


      {/* Departments Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Academic Departments
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Mathematics
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Science
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            English
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Social Studies
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Computer Science
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Physical Education
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Arts & Crafts
          </div>

          <div className="bg-blue-100 p-6 rounded-xl text-center font-semibold">
            Languages
          </div>

        </div>

      </section>


      {/* Teaching Methodology */}
      <section className="bg-gray-50 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Teaching Methodology 👨‍🏫
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            Smart Classrooms
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            Practical Learning
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            Activity-Based Education
          </div>

        </div>

      </section>


      {/* Admission CTA */}
      <section className="bg-blue-600 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Admissions Open 2026–27
        </h2>

        <p className="mb-6">
          Join our academic excellence journey today.
        </p>

        <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default Academics;