import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";
import officeImage from "./Cleaning-Images/Cleaning Services 3.jpeg";

export default function ServiceThree() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="text-6xl mb-4">🏢</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Office Cleaning Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Complete office cleaning and maintenance for businesses of all sizes. Create a productive and
            healthy work environment for your team with our professional cleaning services.
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
                src={officeImage}
                alt="Office Cleaning"
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
                  <span className="text-gray-700">Daily office maintenance and cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Desk and workspace sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Meeting room and conference area cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Kitchen and break room cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Restroom deep cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Floor cleaning (vacuuming, mopping)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Window and glass cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Trash removal and recycling</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Flexible scheduling to fit your business hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Professional and reliable staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Quality control and inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Eco-friendly cleaning products available</span>
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
              Prices vary depending on the size of your office, frequency of service, and specific cleaning requirements.
              Contact us for a customized quote tailored to your business needs.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-xl mb-4">Starting from €30/hour</p>
              <p className="text-gray-600 mb-6">
                Special rates available for weekly or monthly service contracts
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach to Office Cleaning</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Tazat Cleaning, we understand that a clean office is essential for productivity and employee well-being.
            Our professional team works efficiently to keep your workspace spotless without disrupting your operations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer flexible scheduling options, including after-hours and weekend cleaning, to ensure minimal
            interference with your business activities. Our team is trained to handle all types of office environments,
            from small startups to large corporate offices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use high-quality, eco-friendly cleaning products that are safe for your employees and the environment,
            while delivering exceptional cleaning results every time.
          </p>
        </div>

        {/* Service Frequency Options */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Service Frequency Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Cleaning</h3>
              <p className="text-gray-600">
                Perfect for high-traffic offices that need consistent maintenance
              </p>
            </div>
            <div className="bg-white border-2 border-orange-500 rounded-xl p-6 text-center shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Weekly Cleaning</h3>
              <p className="text-gray-600">
                Most popular option for small to medium-sized offices
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bi-Weekly Cleaning</h3>
              <p className="text-gray-600">
                Ideal for smaller offices with lighter cleaning needs
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Create a Healthier Workplace</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your office cleaning needs and receive a customized cleaning plan.
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
