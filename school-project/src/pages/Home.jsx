import Card from "../components/Card";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Orchids High School
        </h1>

        <p className="text-lg mb-6">
          Empowering students with knowledge, discipline, and creativity.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Explore More
        </button>
      </section>


      {/* Notice Board Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-center mb-6">
          Latest Announcements 📢
        </h2>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-2">
          <p>📅 Annual Day Celebration on March 25</p>
          <p>🏆 Sports Day Registrations Open</p>
          <p>📚 Mid Exams start from next Monday</p>
        </div>

      </section>


      {/* Highlights Section */}
      <section className="bg-gray-50 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          School Highlights ⭐
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

          <Card
            title="Annual Day"
            description="Students performed amazing cultural programs."
            image="https://source.unsplash.com/400x300/?school-event"
          />

          <Card
            title="Sports Day"
            description="Encouraging teamwork and physical fitness."
            image="https://source.unsplash.com/400x300/?sports-school"
          />

          <Card
            title="Science Fair"
            description="Innovative student science projects displayed."
            image="https://source.unsplash.com/400x300/?science-school"
          />

        </div>

      </section>


      {/* Call To Action Section */}
      <section className="bg-blue-600 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Join Our School Today
        </h2>

        <p className="mb-6">
          Admissions are open for the academic year 2026–27.
        </p>

        <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default Home;