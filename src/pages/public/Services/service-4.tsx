import NavbarComponent from "../components/Navbar";
import { FooterComponent } from "../components/Footer";
import { Link } from "react-router-dom";

export default function ServiceFour() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Header Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Residential Cleaning Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Home cleaning services to keep your living space spotless and fresh. Enjoy more free time
            while we take care of your home with our professional residential cleaning services.
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
                src="/src/pages/public/Services/Cleaning-Images/Cleaning Services 4.jpeg"
                alt="Residential Cleaning"
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
                  <span className="text-gray-700">Deep home cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Kitchen cleaning and degreasing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Bathroom deep cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Living areas and bedrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Dusting, mopping, and vacuuming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Window and mirror cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Laundry and ironing (optional)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Customized cleaning plans</span>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Trusted and background-checked cleaners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Flexible scheduling to fit your life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Eco-friendly cleaning products</span>
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
              Prices vary depending on the size of your home, frequency of service, and specific cleaning requirements.
              Contact us for a customized quote tailored to your household needs.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold text-xl mb-4">Starting from €29/hour</p>
              <p className="text-gray-600 mb-6">
                Special rates available for recurring weekly or bi-weekly service
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach to Residential Cleaning</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Tazat Cleaning, we treat your home with the same care and respect we would our own. Our professional
            cleaners are thoroughly trained and background-checked to ensure your peace of mind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We understand that every home is unique, which is why we offer customized cleaning plans tailored to
            your specific needs and preferences. Whether you need a one-time deep clean or regular maintenance,
            we've got you covered.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All our cleaning products are eco-friendly and safe for your family and pets, while still delivering
            exceptional cleaning results that will leave your home sparkling.
          </p>
        </div>

        {/* Service Packages */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Popular Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Clean</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Dusting and vacuuming</li>
                <li>✓ Kitchen surface cleaning</li>
                <li>✓ Bathroom cleaning</li>
                <li>✓ Floor mopping</li>
              </ul>
              <p className="text-gray-800 font-semibold">From €29/hour</p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 shadow-md">
              <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Deep Clean</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Everything in Basic Clean</li>
                <li>✓ Inside appliances</li>
                <li>✓ Cabinet cleaning</li>
                <li>✓ Detailed bathroom scrub</li>
                <li>✓ Window cleaning</li>
              </ul>
              <p className="text-gray-800 font-semibold">From €35/hour</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Move In/Out</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Complete deep cleaning</li>
                <li>✓ All surfaces and appliances</li>
                <li>✓ Inside cabinets & drawers</li>
                <li>✓ All windows</li>
                <li>✓ Detailed everywhere</li>
              </ul>
              <p className="text-gray-800 font-semibold">Custom Quote</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience a Spotless Home</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your home cleaning needs and receive a customized cleaning plan.
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
