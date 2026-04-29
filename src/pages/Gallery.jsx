import { useState } from "react";

function Gallery() {

  const [activeCategory, setActiveCategory] = useState("All");

  const images = [
    {
      src: "https://source.unsplash.com/600x400/?school-campus,india",
      category: "Campus",
    },
    {
      src: "https://source.unsplash.com/600x400/?students-classroom,india",
      category: "Classrooms",
    },
    {
      src: "https://source.unsplash.com/600x400/?school-science-lab,india",
      category: "Labs",
    },
    {
      src: "https://source.unsplash.com/600x400/?school-sports,india",
      category: "Activities",
    },
    {
      src: "https://source.unsplash.com/600x400/?students-drawing-school",
      category: "Activities",
    },
    {
      src: "https://source.unsplash.com/600x400/?school-annual-day",
      category: "Events",
    },
  ];


  const categories = [
    "All",
    "Campus",
    "Classrooms",
    "Labs",
    "Activities",
    "Events",
  ];


  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);


  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-14 md:py-20 px-4">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Orchids High School Gallery
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Explore our vibrant campus life, smart classrooms, student activities,
          laboratories, and memorable school events.
        </p>

      </section>


      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-4 py-8">

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-5 py-2 rounded-full font-medium transition text-sm md:text-base ${
                activeCategory === category
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-gray-200 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredImages.map((img, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group relative"
            >

              <img
                src={img.src}
                alt="School Gallery"
                className="w-full h-56 sm:h-60 md:h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition">
                {img.category}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-14 px-4">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Discover Learning Beyond Classrooms
        </h2>

        <p className="mb-6 text-sm md:text-lg max-w-2xl mx-auto">
          At Orchids High School, students grow through academics, creativity,
          sports, and cultural excellence in a supportive learning environment.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply for Admission
        </button>

      </section>

    </div>
  );
}

export default Gallery;