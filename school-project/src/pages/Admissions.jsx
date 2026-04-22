function Admissions() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Admissions Open 2026–27
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Join Orchids Junior College and begin your journey toward academic
          excellence and professional success.
        </p>
      </section>


      {/* Eligibility Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-bold text-center mb-8">
          Eligibility Criteria
        </h2>

        <div className="bg-gray-100 rounded-xl p-8 shadow-md text-center">

          <p className="text-gray-600 text-lg">
            Students who have successfully completed SSC / 10th Class from any
            recognized board are eligible to apply for Intermediate First Year
            admissions.
          </p>

        </div>

      </section>


      {/* Admission Process */}
      <section className="bg-gray-50 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Admission Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            Submit Application Form
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            Document Verification
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            Counseling & Stream Selection
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            Confirm Admission
          </div>

        </div>

      </section>


      {/* Documents Required */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Documents Required
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white shadow-md rounded-xl p-6">
            SSC / 10th Marks Memo (Original + Xerox)
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Transfer Certificate (TC)
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Study Certificate
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Aadhar Card Copy
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Passport Size Photographs (4 Copies)
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Caste Certificate (If Applicable)
          </div>

        </div>

      </section>


      {/* Fee Highlights Section */}
      <section className="bg-gray-50 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Fee Structure Highlights
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 text-center">

          <div className="bg-white shadow-md rounded-xl p-6">
            Affordable Fee Packages
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Scholarships for Merit Students
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            Flexible Payment Options
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Apply Today for Intermediate First Year
        </h2>

        <p className="mb-6">
          Limited seats available for MPC, BiPC, MEC & CEC streams.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default Admissions;