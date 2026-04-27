import React from "react";

function ReadMoreModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">

        {/* Header */}
        <div className="bg-blue-700 text-white p-5 rounded-t-2xl sticky top-0">

          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-xl hover:scale-110 transition"
          >
            ✕
          </button>

          <h2 className="text-xl md:text-2xl font-bold text-center">
            About Sadana Junior College
          </h2>

        </div>


        {/* Content */}
        <div className="p-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">

          <p>
            Sadana Junior College provides high-quality intermediate education
            with integrated coaching programs designed to help students succeed
            in competitive exams like IIT-JEE, NEET, and EAMCET.
          </p>

          <div>
            <h3 className="font-semibold text-blue-700 text-lg">
              Our Vision
            </h3>

            <p>
              To provide excellent academic guidance and create future-ready
              students with strong fundamentals and confidence.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-blue-700 text-lg">
              Courses Offered
            </h3>

            <ul className="list-disc ml-6">
              <li>MPC – Engineering Track</li>
              <li>BiPC – Medical Track</li>
              <li>MEC – Commerce Track</li>
              <li>CEC – Civil Services Foundation</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-blue-700 text-lg">
              Facilities
            </h3>

            <ul className="list-disc ml-6">
              <li>Digital classrooms</li>
              <li>Expert faculty</li>
              <li>Weekly exams & analysis</li>
              <li>Study hours monitoring</li>
              <li>Integrated coaching programs</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-blue-700 text-lg">
              Achievements
            </h3>

            <ul className="list-disc ml-6">
              <li>98% board results consistently</li>
              <li>500+ IIT / NEET selections</li>
              <li>25+ years academic excellence</li>
            </ul>
          </div>


          <div className="bg-blue-50 p-4 rounded-lg text-center">

            <h4 className="font-semibold text-blue-700">
              Admissions Open 2026–27
            </h4>

            <p>
              Apply now to secure your seat in Intermediate First Year.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReadMoreModal;