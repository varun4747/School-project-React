function Academics() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-14 md:py-20 px-4">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Academics & Curriculum
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Our academic structure is designed to provide strong foundational
          knowledge, creativity, discipline, and overall personality development.
        </p>

      </section>


      {/* Classes Offered */}
      <section className="max-w-6xl mx-auto py-14 px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Classes Offered
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            "Pre-Primary",
            "Primary (1–5)",
            "Upper Primary (6–8)",
            "High School (9–10)",
          ].map((cls) => (

            <div
              key={cls}
              className="bg-blue-100 rounded-xl p-6 font-semibold hover:bg-blue-200 transition"
            >
              {cls}
            </div>

          ))}

        </div>

      </section>


      {/* Subjects Section */}
      <section className="bg-gray-100 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Subjects We Teach
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">

          {[
            "Mathematics",
            "Science",
            "English",
            "Social Studies",
            "Computer Education",
            "General Knowledge",
            "Physical Education",
            "Moral Education",
          ].map((subject) => (

            <div
              key={subject}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              {subject}
            </div>

          ))}

        </div>

      </section>


      {/* Teaching Methodology */}
      <section className="max-w-6xl mx-auto py-14 px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Teaching Methodology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          {[
            "Smart Classrooms with Digital Learning",
            "Activity-Based Teaching Approach",
            "Continuous Student Assessment",
          ].map((method) => (

            <div
              key={method}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              {method}
            </div>

          ))}

        </div>

      </section>


      {/* Co-Curricular Activities */}
      <section className="bg-gray-50 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Co-Curricular Activities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">

          {[
            "Sports & Games",
            "Cultural Activities",
            "Drawing & Painting",
            "Science Projects",
            "Quiz Competitions",
            "Music & Dance",
            "Yoga Training",
            "School Events",
          ].map((activity) => (

            <div
              key={activity}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              {activity}
            </div>

          ))}

        </div>

      </section>


      {/* Evaluation System */}
      <section className="max-w-6xl mx-auto py-14 px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Student Evaluation System
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          {[
            "Weekly Class Tests",
            "Monthly Progress Reports",
            "Parent-Teacher Meetings",
          ].map((evaluation) => (

            <div
              key={evaluation}
              className="bg-blue-100 rounded-xl p-6 font-semibold hover:bg-blue-200 transition"
            >
              {evaluation}
            </div>

          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-14 px-4">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Admissions Open 2026–27
        </h2>

        <p className="mb-6">
          Give your child the best learning environment at Orchids High School.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default Academics;