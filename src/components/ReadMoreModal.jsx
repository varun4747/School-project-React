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
            About Orchids High School
          </h2>

        </div>


        {/* Content */}
        <div className="p-5 md:p-6 space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">

          <p>
            Orchids High School is dedicated to providing quality education that
            supports academic excellence, discipline, creativity, and overall
            personality development. Our mission is to nurture confident and
            responsible students prepared for future success.
          </p>


          {/* Vision */}
          <div>

            <h3 className="font-semibold text-blue-700 text-lg">
              Our Vision
            </h3>

            <p>
              To create a strong educational foundation that helps students grow
              into knowledgeable, disciplined, and socially responsible citizens.
            </p>

          </div>


          {/* Classes Offered */}
          <div>

            <h3 className="font-semibold text-blue-700 text-lg">
              Classes Offered
            </h3>

            <ul className="list-disc ml-6 space-y-1">

              <li>Pre-Primary Education</li>

              <li>Primary School (Grades 1–5)</li>

              <li>Upper Primary (Grades 6–8)</li>

              <li>High School (Grades 9–10)</li>

            </ul>

          </div>


          {/* Facilities */}
          <div>

            <h3 className="font-semibold text-blue-700 text-lg">
              Facilities
            </h3>

            <ul className="list-disc ml-6 space-y-1">

              <li>Smart digital classrooms</li>

              <li>Well-equipped science laboratories</li>

              <li>Computer education support</li>

              <li>Library with learning resources</li>

              <li>Sports and activity programs</li>

            </ul>

          </div>


          {/* Achievements */}
          <div>

            <h3 className="font-semibold text-blue-700 text-lg">
              Achievements
            </h3>

            <ul className="list-disc ml-6 space-y-1">

              <li>Consistent 100% board exam results</li>

              <li>Experienced and qualified teaching faculty</li>

              <li>25+ years of academic excellence</li>

            </ul>

          </div>


          {/* CTA Box */}
          <div className="bg-blue-50 p-4 rounded-lg text-center">

            <h4 className="font-semibold text-blue-700">
              Admissions Open 2026–27
            </h4>

            <p>
              Enroll your child today for a bright academic future at
              Orchids High School.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReadMoreModal;