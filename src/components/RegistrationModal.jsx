import React from "react";

function RegistrationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-3 sm:px-4 md:px-6">

      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl 
                      w-full 
                      max-w-sm 
                      sm:max-w-md 
                      md:max-w-lg 
                      lg:max-w-xl
                      max-h-[95vh] 
                      overflow-y-auto 
                      relative animate-fadeIn">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white 
                        p-4 sm:p-5 
                        rounded-t-2xl 
                        sticky top-0 z-10">

          <button
            className="absolute top-3 right-4 text-white text-lg sm:text-xl hover:scale-110 transition"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
            Intermediate Admissions 2026–27
          </h2>

          <p className="text-xs sm:text-sm text-center mt-1">
            Limited seats available — Apply Now
          </p>

        </div>


        {/* Form Section */}
        <form className="p-4 sm:p-6 space-y-4">

          {/* Student Name */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600">
              Student Name
            </label>

            <input
              type="text"
              placeholder="Enter student full name"
              className="w-full border border-gray-300 
                         p-2 sm:p-3 
                         text-sm sm:text-base
                         rounded-lg 
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          {/* Parent Name */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600">
              Parent Name
            </label>

            <input
              type="text"
              placeholder="Enter parent name"
              className="w-full border border-gray-300 
                         p-2 sm:p-3 
                         text-sm sm:text-base
                         rounded-lg 
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          {/* Mobile Number */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 
                         p-2 sm:p-3 
                         text-sm sm:text-base
                         rounded-lg 
                         focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>


          {/* Course Selection */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600">
              Select Course
            </label>

            <select
              className="w-full border border-gray-300 
                         p-2 sm:p-3 
                         text-sm sm:text-base
                         rounded-lg 
                         focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Select Course</option>
              <option>MPC</option>
              <option>BiPC</option>
              <option>MEC</option>
              <option>CEC</option>
            </select>
          </div>


          {/* Submit Button */}
          <button
            className="w-full 
                       bg-gradient-to-r from-yellow-400 to-yellow-500 
                       text-black 
                       font-semibold 
                       py-2 sm:py-3 
                       text-sm sm:text-base
                       rounded-lg 
                       shadow-md 
                       hover:scale-[1.02] 
                       hover:shadow-lg 
                       transition"
          >
            Submit Application
          </button>


          {/* Footer Note */}
          <p className="text-[11px] sm:text-xs text-gray-500 text-center">
            Our admission team will contact you shortly after submission.
          </p>

        </form>

      </div>
    </div>
  );
}

export default RegistrationModal;