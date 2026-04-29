import { useEffect, useState } from "react";
import logo from "../assets/images/schoollogo.jpg";
import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import RegistrationModal from "../components/RegistrationModal";
import ReadMoreModal from "../components/ReadMoreModal";

const images = [img1, img2, img3];

function Home() {

  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>

      {/* Hero Section */}
      <section
        className="h-[55vh] md:h-[75vh] lg:h-screen bg-cover bg-center relative transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 md:px-8">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Welcome to Orchids High School
          </h1>

          <p className="text-base sm:text-lg md:text-2xl mb-6 max-w-3xl">
            Shaping young minds through quality education, discipline,
            creativity and character development.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-400 text-black px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Admissions Open
          </button>

        </div>
      </section>


      {/* Classes Section */}
      <section className="bg-blue-800 text-white py-12">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Classes Offered
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">

          {[
            "Pre-Primary",
            "Primary School",
            "Upper Primary",
            "High School",
          ].map((classItem) => (

            <div
              key={classItem}
              className="bg-blue-700 rounded-xl p-6 shadow-md"
            >
              {classItem}
            </div>

          ))}

        </div>

      </section>


      {/* Achievements Section */}
      <section className="bg-gray-100 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Achievements
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              100%
            </h2>
            <p>Board Results</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              1200+
            </h2>
            <p>Students Strength</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              25+
            </h2>
            <p>Years Excellence</p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              80+
            </h2>
            <p>Qualified Teachers</p>
          </div>

        </div>

      </section>


      {/* About School Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <img
          src={logo}
          alt="school campus"
          className="rounded-xl shadow-lg w-full h-[250px] md:h-[350px] object-cover"
        />

        <div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Orchids High School
          </h2>

          <p className="text-gray-600 mb-6">
            Orchids High School provides a supportive learning environment
            focused on academic excellence, discipline, and overall personality
            development. Our experienced teachers help students grow into
            confident and responsible citizens.
          </p>

          <button
            onClick={() => setShowReadMore(true)}
            className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Read More
          </button>

        </div>

      </section>


      {/* Facilities Section */}
      <section className="bg-gray-50 py-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Facilities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

          {[
            "Smart Classrooms",
            "Science Laboratories",
            "Computer Lab",
            "Library",
            "Sports Facilities",
            "Activity Rooms",
          ].map((facility) => (

            <div
              key={facility}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              {facility}
            </div>

          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-16 px-4">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join Orchids High School Today
        </h2>

        <p className="mb-6 text-sm md:text-lg">
          Admissions are now open for the academic year 2026–27.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Apply Now
        </button>

      </section>


      <RegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      <ReadMoreModal
        isOpen={showReadMore}
        onClose={() => setShowReadMore(false)}
      />

    </div>
  );
}

export default Home;