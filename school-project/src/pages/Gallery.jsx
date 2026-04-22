import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    {
      src: "https://source.unsplash.com/600x400/?school-campus",
      category: "Campus",
    },
    {
      src: "https://source.unsplash.com/600x400/?school-event",
      category: "Events",
    },
    {
      src: "https://source.unsplash.com/600x400/?students-classroom",
      category: "Students",
    },
    {
      src: "https://source.unsplash.com/600x400/?school-library",
      category: "Campus",
    },
    {
      src: "https://source.unsplash.com/600x400/?science-fair",
      category: "Events",
    },
    {
      src: "https://source.unsplash.com/600x400/?students-learning",
      category: "Students",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          School Gallery
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Explore memorable moments from our campus life, events, and student
          activities.
        </p>
      </section>


      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-4 py-8 text-center">

        <div className="flex justify-center flex-wrap gap-4">

          {["All", "Campus", "Events", "Students"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-blue-500 hover:text-white"
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
                alt="Gallery"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-14">

        <h2 className="text-3xl font-bold mb-4">
          Capture Memories With Us 📸
        </h2>

        <p className="mb-6">
          Stay connected with our latest school activities and celebrations.
        </p>

        <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          View More Updates
        </button>

      </section>

    </div>
  );
}

export default Gallery;