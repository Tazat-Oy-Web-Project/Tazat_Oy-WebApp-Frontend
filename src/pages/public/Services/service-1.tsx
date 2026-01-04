import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

export default function ServiceOne() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="text-6xl mb-4">🏫</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Faculty Cleaning Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Professional cleaning services for educational institutions, universities, and training centers.
            We ensure a safe, hygienic, and conducive learning environment for students and staff.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto max-w-6xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/src/pages/public/Services/Cleaning-Images/Cleaning Services 1.jpeg"
                alt="Faculty Cleaning"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            
            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Classroom deep cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Restroom cleaning and disinfection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Hallway and common area maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Library and study area cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Laboratory and specialized room cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Flexible scheduling (after hours, weekends)</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Experience with educational facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Insured and background-checked staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Compliance with health and safety standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Pricing</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-center mb-6">
              Prices vary depending on the size of the facility, frequency of service, and specific requirements.
              Contact us for a customized quote tailored to your educational institution.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-xl mb-4">Starting from €35/hour</p>
              <p className="text-gray-600 mb-6">
                Special rates available for long-term contracts and large facilities
              </p>
              <Link
                to="/quote"
                className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach to Faculty Cleaning</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Tazat Cleaning, we understand that educational institutions require special attention to detail.
            We work around your schedule to minimize disruption to classes and activities, ensuring that
            students and staff return to a clean, fresh, and healthy environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team is trained in the specific needs of educational facilities, from handling sensitive
            equipment in laboratories to maintaining the cleanliness of high-traffic areas like cafeterias
            and restrooms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly cleaning products that are safe for students, staff, and the environment,
            while still delivering exceptional results.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Facility?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your faculty cleaning needs and receive a customized cleaning plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterComponent />
    </div>
  );
}
