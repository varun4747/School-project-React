import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    {
      src: "https://source.unsplash.com/600x400/?college-campus",
      category: "Campus",
    },
    {
      src: "https://source.unsplash.com/600x400/?students-lecture",
      category: "Classrooms",
    },
    {
      src: "https://source.unsplash.com/600x400/?science-lab",
      category: "Labs",
    },
    {
      src: "https://source.unsplash.com/600x400/?engineering-students",
      category: "Coaching",
    },
    {
      src: "https://source.unsplash.com/600x400/?medical-students",
      category: "Coaching",
    },
    {
      src: "https://source.unsplash.com/600x400/?college-seminar",
      category: "Seminars",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Orchids Junior College Gallery
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Explore our academic environment, integrated coaching sessions,
          laboratories, and campus life at Orchids Junior College.
        </p>
      </section>


      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-4 py-8 text-center">

        <div className="flex justify-center flex-wrap gap-4">

          {[
            "All",
            "Campus",
            "Classrooms",
            "Labs",
            "Coaching",
            "Seminars",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>


      {/* Image Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={img.src}
                alt="College Gallery"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-14">

        <h2 className="text-3xl font-bold mb-4">
          Experience Academic Excellence With Us
        </h2>

        <p className="mb-6">
          Join Orchids Junior College and start your journey toward IIT, NEET,
          and professional career success.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply for Admission
        </button>

      </section>

    </div>
  );
}

export default Gallery;